const fs = require("fs");
const path = require("path");
const { isSentenceParagraph, visibleParts } = require("../src/text-format.js");

const root = path.resolve(__dirname, "..");
const textsDir = path.join(root, "texts");
const files = JSON.parse(fs.readFileSync(path.join(textsDir, "index.json"), "utf8"));

files.forEach((file) => {
  const filePath = path.join(textsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const docs = Array.isArray(data) ? data : [data];
  docs.forEach(migrateDocument);
  fs.writeFileSync(filePath, `${JSON.stringify(data)}\n`);
  console.log(`Migrated ${path.relative(root, filePath)}`);
});

function migrateDocument(doc) {
  const paragraphs = doc.p || doc.paragraphs || [];
  doc.p = paragraphs.map((paragraph, paragraphIndex) => migrateParagraph(paragraph, paragraphIndex));
  delete doc.paragraphs;
}

function migrateParagraph(paragraph, paragraphIndex) {
  if (isSentenceParagraph(paragraph)) return paragraph;
  const fromArray = Array.isArray(paragraph);
  const id = fromArray ? paragraph[0] : (paragraph.id || `p${paragraphIndex + 1}`);
  const left = String(fromArray ? paragraph[1] : (paragraph.ru || paragraph.left || ""));
  const right = String(fromArray ? paragraph[2] : (paragraph.de || paragraph.right || ""));
  const pairs = fromArray ? paragraph[3] : (paragraph.pairs || paragraph.a || []);
  const leftSentences = splitSentences(left);
  const rightSentences = splitSentences(right);
  if (leftSentences.length !== rightSentences.length) {
    throw new Error(`${id} has ${leftSentences.length} RU sentences and ${rightSentences.length} DE sentences.`);
  }
  const rows = leftSentences.map((ru, index) => [ru, rightSentences[index], []]);
  const sentencePlacements = rightSentences.map(() => []);
  pairs.forEach((pair) => {
    const sentenceIndex = findGermanSentenceIndex(pair, rightSentences, sentencePlacements);
    if (sentenceIndex < 0) throw new Error(`${id} could not place pair ${JSON.stringify(pair[0])}.`);
    rows[sentenceIndex][2].push(pair);
  });
  return [id, rows];
}

function findGermanSentenceIndex(pair, sentences, sentencePlacements) {
  const parts = visibleParts(Array.isArray(pair) ? pair[0] : (pair.de || pair.right || ""));
  for (let sentenceIndex = 0; sentenceIndex < sentences.length; sentenceIndex += 1) {
    const placements = sentencePlacements[sentenceIndex];
    const nextPlacements = parts.map((part) => findFreePlacement(sentences[sentenceIndex], part, placements)).filter(Boolean);
    if (nextPlacements.length !== parts.length) continue;
    placements.push(...nextPlacements);
    return sentenceIndex;
  }
  return -1;
}

function findFreePlacement(text, phrase, placements) {
  let start = 0;
  while (start < text.length) {
    const index = text.indexOf(phrase, start);
    if (index < 0) return null;
    const end = index + phrase.length;
    const overlaps = placements.some((placement) => index < placement.end && end > placement.index);
    if (!overlaps && !isWordChar(text[index - 1]) && !isWordChar(text[end])) return { index, end };
    start = index + 1;
  }
  return null;
}

function splitSentences(text) {
  return String(text || "").match(/[^.!?]+[.!?]+|[^.!?]+$/gu)?.map((sentence) => sentence.trim()).filter(Boolean) || [];
}

function isWordChar(char) {
  return !!char && /[\p{L}\p{N}-]/u.test(char);
}
