/**
 * Validation and On-Type sanitization utilities
 * Designed for The Wheels Turbo Cafe forms.
 */

// Sanitizes input in real-time on-type to allow ONLY letters and spaces
export function filterLettersOnly(value: string): string {
  // Replace anything that is not an English letter or whitespace
  return value.replace(/[^a-zA-Z\s]/g, "");
}

// Sanitizes input in real-time on-type to allow ONLY numeric digits (0-9)
export function filterNumbersOnly(value: string, maxLength: number = 10): string {
  // Replace anything that is not a numeric digit
  const numbersOnly = value.replace(/[^0-9]/g, "");
  return numbersOnly.slice(0, maxLength);
}

// Validates Name (letters and spaces only, min 2 characters)
export function validateName(name: string): { isValid: boolean; error?: string } {
  const trimmed = name.trim();
  if (!trimmed) {
    return { isValid: false, error: "Pilot name is required." };
  }
  if (trimmed.length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters long." };
  }
  if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
    return { isValid: false, error: "Name can only contain alphabetic letters." };
  }
  return { isValid: true };
}

// Validates Phone Number (10 digits)
export function validatePhone(phone: string): { isValid: boolean; error?: string } {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  if (!cleanPhone) {
    return { isValid: false, error: "Radio phone number is required." };
  }
  if (cleanPhone.length < 10) {
    return { isValid: false, error: `Enter full 10-digit mobile number (${cleanPhone.length}/10 digits).` };
  }
  if (cleanPhone.length > 10) {
    return { isValid: false, error: "Phone number cannot exceed 10 digits." };
  }
  if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
    return { isValid: false, error: "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9." };
  }
  return { isValid: true };
}

// Validates Email format
export function validateEmail(email: string): { isValid: boolean; error?: string } {
  const trimmed = email.trim();
  if (!trimmed) {
    return { isValid: false, error: "Email dispatch address is required." };
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, error: "Please enter a valid email address (e.g. pilot@example.com)." };
  }
  return { isValid: true };
}

// Validates Transmission/Message
export function validateMessage(message: string): { isValid: boolean; error?: string } {
  const trimmed = message.trim();
  if (!trimmed) {
    return { isValid: false, error: "Transmission message cannot be empty." };
  }
  if (trimmed.length < 5) {
    return { isValid: false, error: "Message must be at least 5 characters long." };
  }
  return { isValid: true };
}

// Validates Booking Date
export function validateDate(dateStr: string): { isValid: boolean; error?: string } {
  if (!dateStr) {
    return { isValid: false, error: "Please select a race date." };
  }
  const selectedDate = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (isNaN(selectedDate.getTime())) {
    return { isValid: false, error: "Invalid date format." };
  }
  if (selectedDate < today) {
    return { isValid: false, error: "Booking date cannot be in the past." };
  }
  return { isValid: true };
}
