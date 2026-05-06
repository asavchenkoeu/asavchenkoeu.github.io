const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const textsDir = path.join(root, "texts");
const indexPath = path.join(textsDir, "index.json");
const outputPath = path.join(textsDir, "text-bank.js");

const files = JSON.parse(fs.readFileSync(indexPath, "utf8"))
  .map((file) => String(file).trim())
  .filter(Boolean);

const texts = files.map((file) => {
  const textPath = path.join(textsDir, file);
  return JSON.parse(fs.readFileSync(textPath, "utf8"));
});

fs.writeFileSync(outputPath, `window.SYNC_READER_TEXTS = ${JSON.stringify(texts)};\n`);
console.log(`Wrote ${texts.length} texts to ${path.relative(root, outputPath)}`);
