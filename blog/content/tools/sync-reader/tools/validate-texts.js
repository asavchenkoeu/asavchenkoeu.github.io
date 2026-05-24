const fs = require("fs");
const path = require("path");
const { validateDocuments } = require("../src/text-format.js");

const root = path.resolve(__dirname, "..");
const textsDir = path.join(root, "texts");
const requested = process.argv.slice(2);
const files = requested.length ? requested : JSON.parse(fs.readFileSync(path.join(textsDir, "index.json"), "utf8"));
let problemCount = 0;

files.forEach((requestedFile) => {
  const filePath = path.isAbsolute(requestedFile) ? requestedFile : path.join(textsDir, requestedFile);
  const displayPath = path.relative(root, filePath);
  const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
  validateDocuments(parsed).forEach((result, documentIndex) => {
    const name = result.doc?.id || `document ${documentIndex + 1}`;
    result.errors.forEach((entry) => report("ERROR", displayPath, name, entry));
    result.warnings.forEach((entry) => report("WARN", displayPath, name, entry));
    problemCount += result.errors.length + result.warnings.length;
  });
});

if (problemCount) {
  console.error(`Found ${problemCount} text mapping problem${problemCount === 1 ? "" : "s"}.`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${files.length} text file${files.length === 1 ? "" : "s"} with full RU/DE word coverage.`);
}

function report(level, file, name, entry) {
  console.error(`${level} ${file} ${name} ${entry.path}: ${entry.message}`);
}
