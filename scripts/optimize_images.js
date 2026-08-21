const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function optimizeDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "unused") {
        await optimizeDirectory(fullPath);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        try {
          const stats = fs.statSync(fullPath);
          // Only optimize files larger than 150KB
          if (stats.size > 150 * 1024) {
            const buffer = fs.readFileSync(fullPath);
            const image = sharp(buffer);
            const metadata = await image.metadata();

            let pipeline = sharp(buffer);
            if (metadata.width && metadata.width > 1920) {
              pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
            }

            let outputBuffer;
            if (ext === ".png") {
              outputBuffer = await pipeline.png({ quality: 80, compressionLevel: 8 }).toBuffer();
            } else {
              outputBuffer = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
            }

            if (outputBuffer.length < stats.size) {
              fs.writeFileSync(fullPath, outputBuffer);
              console.log(`Optimized ${entry.name}: ${(stats.size / 1024).toFixed(0)}KB -> ${(outputBuffer.length / 1024).toFixed(0)}KB (-${Math.round((1 - outputBuffer.length / stats.size) * 100)}%)`);
            }
          }
        } catch (err) {
          console.error(`Error processing ${entry.name}:`, err.message);
        }
      }
    }
  }
}

async function run() {
  console.log("Starting image optimization...");
  const targetDir = path.join(__dirname, "../public/images");
  await optimizeDirectory(targetDir);
  console.log("Image optimization complete!");
}

run();
