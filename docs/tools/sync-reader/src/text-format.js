(function exposeTextFormat(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.SyncReaderTextFormat = api;
})(typeof globalThis === "object" ? globalThis : null, () => {
  function validateDocument(doc) {
    const result = { errors: [], warnings: [] };
    const paragraphs = doc?.p || doc?.paragraphs;
    if (!doc || !Array.isArray(paragraphs)) {
      result.errors.push(issue("document", "Document must have a p array."));
      return result;
    }

    paragraphs.forEach((paragraph, paragraphIndex) => validateParagraph(paragraph, paragraphIndex, result));
    return result;
  }

  function validateDocuments(docs) {
    return (Array.isArray(docs) ? docs : [docs]).map((doc) => ({ doc, ...validateDocument(doc) }));
  }

  function validateParagraph(paragraph, paragraphIndex, result) {
    const path = `p[${paragraphIndex}]`;
    const sentences = getParagraphSentences(paragraph);
    if (!sentences.length) {
      result.errors.push(issue(path, "Paragraph must contain sentence rows."));
      return;
    }
    if (!isSentenceParagraph(paragraph)) {
      result.warnings.push(issue(path, "Legacy paragraph-level mapping is ambiguous. Use [id, [[RU sentence, DE sentence, pairs], ...]]."));
    }
    sentences.forEach((sentence, sentenceIndex) => validateSentence(sentence, `${path}.s[${sentenceIndex}]`, result));
  }

  function validateSentence(sentence, path, result) {
    if (!sentence.left || !sentence.right) {
      result.errors.push(issue(path, "Sentence row must contain RU and DE text."));
      return;
    }
    if (!Array.isArray(sentence.pairs)) {
      result.errors.push(issue(path, "Sentence row must contain a pairs array."));
      return;
    }
    validateSentenceSide(sentence.left, sentence.pairs, "left", "RU", path, result);
    validateSentenceSide(sentence.right, sentence.pairs, "right", "DE", path, result);
  }

  function validateSentenceSide(text, pairs, side, label, path, result) {
    const placements = [];
    pairs.forEach((pair, pairIndex) => {
      const parts = getPairParts(pair, side);
      parts.forEach((part) => {
        const placement = findPlacement(text, part, placements);
        if (!placement) {
          result.warnings.push(issue(`${path}.pairs[${pairIndex}]`, `${label} fragment is not a visible word or phrase in this sentence: "${part}".`));
          return;
        }
        placements.push(placement);
      });
    });

    const uncovered = uncoveredWords(text, placements);
    if (uncovered.length) {
      result.warnings.push(issue(path, `${label} has unconnected words: ${previewWords(uncovered)}.`));
    }
  }

  function getParagraphSentences(paragraph) {
    if (isSentenceParagraph(paragraph)) {
      const rows = Array.isArray(paragraph) ? paragraph[1] : (paragraph.s || paragraph.sentences);
      return rows.map(normalizeSentenceRow).filter(Boolean);
    }
    const fromArray = Array.isArray(paragraph);
    const left = fromArray ? paragraph[1] : (paragraph?.ru || paragraph?.left || "");
    const right = fromArray ? paragraph[2] : (paragraph?.de || paragraph?.right || "");
    const pairs = fromArray ? paragraph[3] : (paragraph?.pairs || paragraph?.a || []);
    return left && right ? [{ left: String(left), right: String(right), pairs: Array.isArray(pairs) ? pairs : [] }] : [];
  }

  function isSentenceParagraph(paragraph) {
    if (Array.isArray(paragraph)) return Array.isArray(paragraph[1]) && paragraph.length <= 2;
    return Array.isArray(paragraph?.s) || Array.isArray(paragraph?.sentences);
  }

  function normalizeSentenceRow(sentence) {
    if (Array.isArray(sentence)) {
      return { left: String(sentence[0] || ""), right: String(sentence[1] || ""), pairs: Array.isArray(sentence[2]) ? sentence[2] : [] };
    }
    if (!sentence || typeof sentence !== "object") return null;
    return {
      left: String(sentence.ru || sentence.left || ""),
      right: String(sentence.de || sentence.right || ""),
      pairs: Array.isArray(sentence.pairs || sentence.a) ? (sentence.pairs || sentence.a) : []
    };
  }

  function getPairParts(pair, side) {
    const fromArray = Array.isArray(pair);
    const value = side === "left"
      ? (fromArray ? pair[1] : (pair?.ru || pair?.left || ""))
      : (fromArray ? pair[0] : (pair?.de || pair?.right || ""));
    return visibleParts(value);
  }

  function visibleParts(value) {
    if (Array.isArray(value)) return value.flatMap(visibleParts).filter(Boolean);
    return value ? [String(value)] : [];
  }

  function findPlacement(text, phrase, placements) {
    const free = findFreePlacement(text, phrase, placements);
    if (free) return free;
    return placements.find((placement) => placement.value === phrase && text.slice(placement.index, placement.end) === phrase) || null;
  }

  function findFreePlacement(text, phrase, placements) {
    let start = 0;
    while (start < text.length) {
      const index = text.indexOf(phrase, start);
      if (index < 0) return null;
      const end = index + phrase.length;
      const overlaps = placements.some((placement) => index < placement.end && end > placement.index);
      if (!overlaps && hasPhraseBoundary(text, index, end)) return { value: phrase, index, end };
      start = index + 1;
    }
    return null;
  }

  function uncoveredWords(text, placements) {
    return Array.from(String(text || "").matchAll(/[\p{L}\p{N}-]+/gu))
      .filter((match) => {
        const start = match.index;
        const end = start + match[0].length;
        return !placements.some((placement) => start >= placement.index && end <= placement.end);
      })
      .map((match) => match[0]);
  }

  function hasPhraseBoundary(text, start, end) {
    return !isWordChar(text[start - 1]) && !isWordChar(text[end]);
  }

  function isWordChar(char) {
    return !!char && /[\p{L}\p{N}-]/u.test(char);
  }

  function previewWords(words) {
    const unique = [];
    words.forEach((word) => {
      if (!unique.includes(word)) unique.push(word);
    });
    const shown = unique.slice(0, 8).map((word) => `"${word}"`).join(", ");
    return unique.length > 8 ? `${shown} and ${unique.length - 8} more` : shown;
  }

  function issue(path, message) {
    return { path, message };
  }

  return { getParagraphSentences, isSentenceParagraph, validateDocument, validateDocuments, visibleParts };
});
