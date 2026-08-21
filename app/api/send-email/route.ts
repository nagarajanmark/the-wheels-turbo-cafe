import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import { CAFE_DATA } from "@/data/cafeData";
import {
  validateName,
  validatePhone,
  validateEmail,
  validateMessage,
  validateDate,
} from "@/lib/validations";

interface ContactPayload {
  type: "contact";
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface ReservationPayload {
  type: "reservation";
  name: string;
  phone: string;
  guests: string;
  date: string;
  timeSlot: string;
  seatingArea: string;
  email?: string;
  message?: string;
}

type FormPayload = ContactPayload | ReservationPayload;

export async function POST(req: NextRequest) {
  try {
    const body: FormPayload = await req.json();

    if (!body || !body.type) {
      return NextResponse.json(
        { success: false, error: "Invalid telemetry payload. Form type is required." },
        { status: 400 }
      );
    }

    // 1. Server-side validations
    const nameVal = validateName(body.name || "");
    if (!nameVal.isValid) {
      return NextResponse.json({ success: false, error: nameVal.error }, { status: 422 });
    }

    const phoneVal = validatePhone(body.phone || "");
    if (!phoneVal.isValid) {
      return NextResponse.json({ success: false, error: phoneVal.error }, { status: 422 });
    }

    let adminSubject = "";
    let adminHtml = "";
    let userSubject = "";
    let userHtml = "";
    let userRecipientEmail = "";

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Logo embedding helper (uses CID inline attachment with fallback to hosted site URL)
    const logoSrc = "cid:turboCafeLogo";
    const headerLogoHtml = `
      <div style="text-align: center; margin-bottom: 16px;">
        <img src="${logoSrc}" alt="The Wheels Turbo Cafe" style="max-height: 52px; width: auto; display: inline-block;" />
      </div>
    `;

    if (body.type === "contact") {
      const emailVal = validateEmail(body.email || "");
      if (!emailVal.isValid) {
        return NextResponse.json({ success: false, error: emailVal.error }, { status: 422 });
      }

      const msgVal = validateMessage(body.message || "");
      if (!msgVal.isValid) {
        return NextResponse.json({ success: false, error: msgVal.error }, { status: 422 });
      }

      userRecipientEmail = body.email;

      // 1. Email for Admin / Cafe Owner
      adminSubject = `⚡ [NEW TELEMETRY] Contact Message from ${body.name} (${body.phone})`;
      adminHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0c0d; color: #f4f4f4; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #141416; border: 1px solid #e10600; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.8); }
            .header { background: #0c0c0d; padding: 26px 20px; text-align: center; border-bottom: 2px solid #e10600; }
            .header h1 { margin: 6px 0 0 0; color: #ffffff; font-size: 20px; text-transform: uppercase; letter-spacing: 2px; }
            .header p { margin: 4px 0 0 0; color: #ff5a00; font-size: 11px; letter-spacing: 1.5px; font-weight: bold; }
            .content { padding: 24px; }
            .badge { display: inline-block; background: #e1060020; color: #ff5a00; border: 1px solid #ff5a0050; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 16px; }
            .data-table { width: 100%; border-collapse: collapse; margin-top: 12px; margin-bottom: 20px; }
            .data-table td { padding: 12px 14px; border-bottom: 1px solid #28282c; font-size: 14px; }
            .data-table td.label { color: #a1a1aa; font-weight: bold; width: 35%; text-transform: uppercase; font-size: 12px; }
            .data-table td.value { color: #ffffff; font-weight: 500; }
            .message-box { background-color: #0c0c0d; border-left: 3px solid #ffc400; padding: 14px; border-radius: 4px; font-size: 14px; color: #e4e4e7; line-height: 1.6; white-space: pre-wrap; }
            .footer { padding: 16px 24px; background-color: #0c0c0d; border-top: 1px solid #28282c; text-align: center; font-size: 11px; color: #71717a; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              ${headerLogoHtml}
              <h1>THE WHEELS TURBO CAFE</h1>
              <p>RADIO TELEMETRY DISPATCH // COIMBATORE PADDOCK</p>
            </div>
            <div class="content">
              <div class="badge">📡 INCOMING PILOT SIGNAL RECEIVED</div>
              <table class="data-table">
                <tr>
                  <td class="label">Pilot Name</td>
                  <td class="value"><strong>${escapeHtml(body.name)}</strong></td>
                </tr>
                <tr>
                  <td class="label">Radio Phone</td>
                  <td class="value"><a href="tel:${body.phone}" style="color: #ff5a00; text-decoration: none; font-weight: bold;">${escapeHtml(body.phone)}</a></td>
                </tr>
                <tr>
                  <td class="label">Email Dispatch</td>
                  <td class="value"><a href="mailto:${body.email}" style="color: #ff5a00; text-decoration: none;">${escapeHtml(body.email)}</a></td>
                </tr>
                <tr>
                  <td class="label">Dispatched At</td>
                  <td class="value">${timestamp}</td>
                </tr>
              </table>
              <div style="font-size: 12px; color: #a1a1aa; text-transform: uppercase; font-weight: bold; margin-bottom: 8px;">Transmission Message:</div>
              <div class="message-box">${escapeHtml(body.message)}</div>
            </div>
            <div class="footer">
              The Wheels Turbo Cafe • 7, Arokiasamy Rd W, RS Puram, Coimbatore, Tamil Nadu 641002
            </div>
          </div>
        </body>
        </html>
      `;

      // 2. Email for User (Customer Confirmation)
      userSubject = `🏁 Transmission Locked, ${body.name}! // The Wheels Turbo Cafe Coimbatore`;
      userHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0c0d; color: #f4f4f4; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #141416; border: 1px solid #ff5a00; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.8); }
            .header { background: #0c0c0d; padding: 26px 20px; text-align: center; border-bottom: 2px solid #e10600; }
            .header h1 { margin: 6px 0 0 0; color: #ffffff; font-size: 22px; text-transform: uppercase; letter-spacing: 2px; }
            .header p { margin: 4px 0 0 0; color: #ff5a00; font-size: 11px; letter-spacing: 1.5px; font-weight: bold; }
            .content { padding: 28px; line-height: 1.6; }
            .hero-greeting { font-size: 18px; font-weight: bold; color: #ffffff; margin-bottom: 12px; }
            .badge { display: inline-block; background: #00e67620; color: #00e676; border: 1px solid #00e67650; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 16px; }
            .card { background-color: #0c0c0d; border: 1px solid #28282c; border-radius: 8px; padding: 16px; margin: 20px 0; }
            .card-title { color: #ffc400; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-bottom: 8px; }
            .meta-item { margin: 6px 0; font-size: 13px; color: #d4d4d8; }
            .btn { display: inline-block; background: linear-gradient(135deg, #e10600 0%, #ff5a00 100%); color: #0c0c0d !important; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; margin-top: 16px; }
            .footer { padding: 20px 28px; background-color: #0c0c0d; border-top: 1px solid #28282c; text-align: center; font-size: 11px; color: #71717a; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              ${headerLogoHtml}
              <h1>THE WHEELS TURBO CAFE</h1>
              <p>COIMBATORE'S PREMIER MOTORSPORT THEME CAFE</p>
            </div>
            <div class="content">
              <div class="badge">✅ SIGNAL RECEIVED // PIT CREW DISPATCH</div>
              <div class="hero-greeting">Lights out & away we go, ${escapeHtml(body.name)}!</div>
              <p style="color: #a1a1aa; font-size: 14px;">
                Thank you for contacting <strong>The Wheels Turbo Cafe</strong> in RS Puram, Coimbatore. Our paddock team has received your transmission and will get in touch with you shortly.
              </p>

              <div class="card">
                <div class="card-title">📡 Summary of Your Transmission:</div>
                <div class="meta-item"><strong>Pilot:</strong> ${escapeHtml(body.name)}</div>
                <div class="meta-item"><strong>Radio Phone:</strong> ${escapeHtml(body.phone)}</div>
                <div class="meta-item"><strong>Your Message:</strong> <em>"${escapeHtml(body.message)}"</em></div>
              </div>

              <div class="card" style="border-left: 3px solid #e10600;">
                <div class="card-title">📍 Paddock Pitstop Location & Timings:</div>
                <div class="meta-item"><strong>Address:</strong> West Arokiasamy Road, RS Puram, Coimbatore (Opposite to Yamaha Showroom), TN 641002</div>
                <div class="meta-item"><strong>Track Hours:</strong> Mon–Fri: 11:00 AM – 11:00 PM | Sat: 11:00 AM – 11:30 PM (Sun Closed)</div>
                <div class="meta-item"><strong>Direct Radio:</strong> +91 81470 12883</div>
              </div>

              <div style="text-align: center; margin-top: 24px;">
                <a href="https://maps.google.com/?q=The+Wheels+Turbo+Cafe+RS+Puram+Coimbatore" class="btn">
                  📍 Get Directions on Google Maps
                </a>
              </div>
            </div>
            <div class="footer">
              © The Wheels Turbo Cafe • RS Puram, Coimbatore • Dedicated to Motorsport Passion<br>
              This is an automated confirmation of your contact form submission.
            </div>
          </div>
        </body>
        </html>
      `;
    } else if (body.type === "reservation") {
      const dateVal = validateDate(body.date || "");
      if (!dateVal.isValid) {
        return NextResponse.json({ success: false, error: dateVal.error }, { status: 422 });
      }

      if (body.email) {
        userRecipientEmail = body.email;
      }

      // 1. Email for Admin
      adminSubject = `🏁 [NEW PITSTOP BOOKING] ${body.name} (${body.guests} Crew) on ${body.date} at ${body.timeSlot}`;
      adminHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0c0d; color: #f4f4f4; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #141416; border: 1px solid #e10600; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.8); }
            .header { background: #0c0c0d; padding: 26px 20px; text-align: center; border-bottom: 2px solid #e10600; }
            .header h1 { margin: 6px 0 0 0; color: #ffffff; font-size: 20px; text-transform: uppercase; letter-spacing: 2px; }
            .header p { margin: 4px 0 0 0; color: #ff5a00; font-size: 11px; letter-spacing: 1.5px; font-weight: bold; }
            .content { padding: 24px; }
            .badge { display: inline-block; background: #00e67620; color: #00e676; border: 1px solid #00e67650; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 16px; }
            .data-table { width: 100%; border-collapse: collapse; margin-top: 12px; margin-bottom: 20px; }
            .data-table td { padding: 12px 14px; border-bottom: 1px solid #28282c; font-size: 14px; }
            .data-table td.label { color: #a1a1aa; font-weight: bold; width: 38%; text-transform: uppercase; font-size: 12px; }
            .data-table td.value { color: #ffffff; font-weight: 500; }
            .footer { padding: 16px 24px; background-color: #0c0c0d; border-top: 1px solid #28282c; text-align: center; font-size: 11px; color: #71717a; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              ${headerLogoHtml}
              <h1>THE WHEELS TURBO CAFE</h1>
              <p>PADDOCK BAY TABLE RESERVATION</p>
            </div>
            <div class="content">
              <div class="badge">🏁 GREEN FLAG // PITSTOP RESERVATION REQUEST</div>
              <table class="data-table">
                <tr>
                  <td class="label">Pilot / Lead Name</td>
                  <td class="value"><strong>${escapeHtml(body.name)}</strong></td>
                </tr>
                <tr>
                  <td class="label">Radio Phone</td>
                  <td class="value"><a href="tel:${body.phone}" style="color: #ff5a00; text-decoration: none; font-weight: bold;">${escapeHtml(body.phone)}</a></td>
                </tr>
                ${
                  body.email
                    ? `<tr><td class="label">Email</td><td class="value"><a href="mailto:${body.email}" style="color: #ff5a00; text-decoration: none;">${escapeHtml(body.email)}</a></td></tr>`
                    : ""
                }
                <tr>
                  <td class="label">Crew / Guest Count</td>
                  <td class="value"><strong>${escapeHtml(body.guests)} Persons</strong></td>
                </tr>
                <tr>
                  <td class="label">Race Date</td>
                  <td class="value" style="color: #ffc400; font-weight: bold;">${escapeHtml(body.date)}</td>
                </tr>
                <tr>
                  <td class="label">Time Slot</td>
                  <td class="value" style="color: #ff5a00; font-weight: bold;">${escapeHtml(body.timeSlot)} HRS</td>
                </tr>
                <tr>
                  <td class="label">Paddock Experience</td>
                  <td class="value"><strong>${escapeHtml(body.seatingArea)}</strong></td>
                </tr>
                <tr>
                  <td class="label">Booking Submitted</td>
                  <td class="value">${timestamp}</td>
                </tr>
              </table>
            </div>
            <div class="footer">
              The Wheels Turbo Cafe • 7, Arokiasamy Rd W, RS Puram, Coimbatore, Tamil Nadu 641002
            </div>
          </div>
        </body>
        </html>
      `;

      // 2. Email for User (Customer Booking Confirmation)
      userSubject = `🏁 Pitstop Bay Reserved for ${body.name} // The Wheels Turbo Cafe Coimbatore`;
      userHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0c0d; color: #f4f4f4; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #141416; border: 1px solid #00e676; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.8); }
            .header { background: #0c0c0d; padding: 26px 20px; text-align: center; border-bottom: 2px solid #e10600; }
            .header h1 { margin: 6px 0 0 0; color: #ffffff; font-size: 22px; text-transform: uppercase; letter-spacing: 2px; }
            .header p { margin: 4px 0 0 0; color: #ff5a00; font-size: 11px; letter-spacing: 1.5px; font-weight: bold; }
            .content { padding: 28px; line-height: 1.6; }
            .badge { display: inline-block; background: #00e67620; color: #00e676; border: 1px solid #00e67650; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 16px; }
            .card { background-color: #0c0c0d; border: 1px solid #28282c; border-radius: 8px; padding: 16px; margin: 20px 0; }
            .meta-item { margin: 8px 0; font-size: 13px; color: #d4d4d8; }
            .btn { display: inline-block; background: linear-gradient(135deg, #e10600 0%, #ff5a00 100%); color: #0c0c0d !important; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; margin-top: 16px; }
            .footer { padding: 20px 28px; background-color: #0c0c0d; border-top: 1px solid #28282c; text-align: center; font-size: 11px; color: #71717a; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              ${headerLogoHtml}
              <h1>THE WHEELS TURBO CAFE</h1>
              <p>PITSTOP TABLE RESERVATION PASS</p>
            </div>
            <div class="content">
              <div class="badge">🏁 RESERVATION CONFIRMED</div>
              <h2 style="color: #ffffff; font-size: 18px; margin: 0 0 12px 0;">We look forward to hosting you on the grid, ${escapeHtml(body.name)}!</h2>
              <p style="color: #a1a1aa; font-size: 14px;">
                Your pitstop table has been requested at <strong>The Wheels Turbo Cafe</strong>, RS Puram, Coimbatore. Here are your booking details:
              </p>

              <div class="card" style="border-left: 3px solid #00e676;">
                <div class="meta-item"><strong>🏎️ Pilot Name:</strong> ${escapeHtml(body.name)}</div>
                <div class="meta-item"><strong>👥 Crew Size:</strong> ${escapeHtml(body.guests)} Persons</div>
                <div class="meta-item"><strong>📅 Race Date:</strong> <span style="color: #ffc400; font-weight: bold;">${escapeHtml(body.date)}</span></div>
                <div class="meta-item"><strong>⏰ Time Slot:</strong> <span style="color: #ff5a00; font-weight: bold;">${escapeHtml(body.timeSlot)} HRS</span></div>
                <div class="meta-item"><strong>🏁 Seating Bay:</strong> ${escapeHtml(body.seatingArea)}</div>
                <div class="meta-item"><strong>📞 Contact Phone:</strong> ${escapeHtml(body.phone)}</div>
              </div>

              <div class="card" style="border-left: 3px solid #e10600;">
                <div style="color: #ffc400; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-bottom: 6px;">📍 Paddock Location:</div>
                <div class="meta-item">West Arokiasamy Road, RS Puram, Coimbatore (Opposite to Yamaha Showroom), TN 641002</div>
                <div class="meta-item">Need help or changes? Call us at <strong>+91 81470 12883</strong></div>
              </div>

              <div style="text-align: center; margin-top: 24px;">
                <a href="https://maps.google.com/?q=The+Wheels+Turbo+Cafe+RS+Puram+Coimbatore" class="btn">
                  📍 Navigate to The Wheels Turbo Cafe
                </a>
              </div>
            </div>
            <div class="footer">
              © The Wheels Turbo Cafe • RS Puram, Coimbatore • Dedicated to Motorsport Passion
            </div>
          </div>
        </body>
        </html>
      `;
    }

    // Check if SMTP environment variables are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const adminReceiverEmail = process.env.CONTACT_EMAIL_TO || process.env.MAIL_TO || CAFE_DATA.email;

    // Check logo file existence for attachment
    const logoFilePath = path.join(process.cwd(), "public", "logo.png");
    const hasLogoFile = fs.existsSync(logoFilePath);
    const emailAttachments = hasLogoFile
      ? [
          {
            filename: "logo.png",
            path: logoFilePath,
            cid: "turboCafeLogo",
          },
        ]
      : [];

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // 1. Send Email to Admin / Cafe Team
      await transporter.sendMail({
        from: `"${body.name} (via Turbo Cafe)" <${smtpUser}>`,
        to: adminReceiverEmail,
        replyTo: userRecipientEmail || undefined,
        subject: adminSubject,
        html: adminHtml,
        attachments: emailAttachments,
      });

      // 2. Send Auto-Responder / Confirmation Email to User (if user provided email)
      if (userRecipientEmail) {
        try {
          await transporter.sendMail({
            from: `"The Wheels Turbo Cafe" <${smtpUser}>`,
            to: userRecipientEmail,
            subject: userSubject,
            html: userHtml,
            attachments: emailAttachments,
          });
        } catch (userMailErr) {
          console.warn("Failed to send auto-reply email to user:", userMailErr);
        }
      }

      return NextResponse.json({
        success: true,
        message: "Telemetry emails dispatched with embedded logo to both cafe paddock and customer successfully.",
      });
    } else {
      // Development simulator mode
      console.log("================ TELEMETRY EMAIL SIMULATOR ================");
      console.log(`[ADMIN MAIL] To: ${adminReceiverEmail} | Subject: ${adminSubject}`);
      if (userRecipientEmail) {
        console.log(`[USER CONFIRMATION MAIL] To: ${userRecipientEmail} | Subject: ${userSubject}`);
      }
      console.log(`Logo Attached: ${hasLogoFile ? "YES (cid:turboCafeLogo)" : "NO"}`);
      console.log(`Payload:`, body);
      console.log("==========================================================");

      return NextResponse.json({
        success: true,
        simulated: true,
        message:
          "Telemetry received and logged with embedded logo for both admin & customer! (Configure SMTP in .env.local for live dispatch).",
      });
    }
  } catch (error: any) {
    console.error("Error processing mail dispatch:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to transmit telemetry to server.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
