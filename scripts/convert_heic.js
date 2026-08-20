const fs = require('fs');
const path = require('path');
const convert = require('heic-convert');

async function convertAll() {
  const dir = 'public/gallery';
  const files = fs.readdirSync(dir);
  
  for (const f of files) {
    if (f.toLowerCase().endsWith('.heic')) {
      const inputPath = path.join(dir, f);
      const baseName = f.replace(/\.heic$/i, '');
      const outputName = `${baseName}.jpg`;
      const out1 = path.join('public/images/gallery', outputName);
      const out2 = path.join('public/gallery', outputName);
      
      console.log(`Converting ${f}...`);
      try {
        const inputBuffer = fs.readFileSync(inputPath);
        const outputBuffer = await convert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 0.92,
        });
        
        fs.writeFileSync(out1, outputBuffer);
        fs.writeFileSync(out2, outputBuffer);
        console.log(`✓ Created ${outputName} (${Math.round(outputBuffer.length / 1024)} KB)`);
      } catch (err) {
        console.error(`✗ Failed to convert ${f}:`, err.message);
      }
    }
  }
}

convertAll()
  .then(() => console.log('All HEIC conversions complete!'))
  .catch(console.error);
