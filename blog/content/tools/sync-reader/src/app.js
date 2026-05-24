const iconHref = (id) => `#${id}`;
const iconSvg = (id) => `<svg class="icon" aria-hidden="true"><use href="${iconHref(id)}"></use></svg>`;
const textFormat = window.SyncReaderTextFormat;

const i18n = {
  ru: {
    appTitle: "Sync Reader", subtitle: "Синхронное чтение: русский и немецкий", preparePrompt: "Подготовить промпт",
    reading: "Чтение", wordReview: "Обзор слов", rules: "Правила", rulesTitle: "Немецкая грамматика A1-B1", stats: "Статистика", about: "О проекте", library: "Библиотека", importText: "Добавить новый текст", searchTexts: "Поиск текстов...",
    chooseText: "Выбрать текст", saveText: "Сохранить текст", deleteText: "Удалить", russian: "Русский", german: "Немецкий",
    newWords: "Новые слова", studyCurrent: "Учить слова этого текста", studyAll: "Учить все сохраненные слова",
    copyAnki: "Скопировать TSV", downloadAnki: "Скачать TSV", clear: "Очистить", archive: "Архив слов",
    studyArchive: "Учить архив", restoreArchive: "Вернуть архив в новые слова",
    archiveHint: "Здесь остаются слова, которые уже были добавлены или изучены. Они хранятся локально в браузере.",
    generator: "Импорт текста", topic: "Тема или исходный текст", level: "Уровень", targetHintLanguage: "Язык заметок",
    promptForAi: "Промпт для Codex или ChatGPT", copyPrompt: "Скопировать промпт", importJson: "Импортировать JSON",
    pasteJson: "Вставить готовый JSON", generatorHint: "Скопируйте промпт в Codex или ChatGPT, затем вставьте JSON сюда или сохраните файл в texts/ и добавьте имя файла в texts/index.json. Файлы из папки texts подхватываются при загрузке.",
    showAnswer: "Показать ответ", again: "Снова", hard: "Трудно", good: "Хорошо", easy: "Легко", sentence: "Предложение",
    noWords: "Нажмите на слово или фразу в тексте, чтобы добавить карточку.", noStudy: "Нет слов для тренировки.", done: "Сессия завершена.",
    hide: "Скрыть", show: "Показать", words: "слов", cards: "карточек", copiedPrompt: "Промпт скопирован.", imported: "Текст импортирован и сохранен.",
    allTexts: "Все тексты", noTexts: "В библиотеке нет текстов.", folder: "Папка", folders: "Папки", newFolder: "Новая папка", unfiled: "Без папки", cancel: "Отмена", save: "Сохранить",
    renameFolder: "Переименовать папку", deleteFolder: "Удалить папку", folderName: "Название папки", folderAdded: "Папка добавлена.", folderRenamed: "Папка переименована.", folderDeleted: "Папка удалена. Тексты оставлены без папки.",
    renameLibraryText: "Переименовать текст", moveLibraryText: "Переместить текст", textName: "Название текста", textRenamed: "Текст переименован.", textMoved: "Текст перемещен.", deleteTextConfirm: "Удалить этот текст из локальной библиотеки?", deleteFolderConfirm: "Удалить папку? Тексты останутся в библиотеке без папки.",
    aboutTitle: "О Sync Reader", aboutIdea: "Sync Reader был разработан на основе моей личной идеи читать больше. Мне понравился формат параллельных переводов в книгах, и я решил повторить его в удобном приложении, где смогу добавить любой текст по своему желанию.",
    aboutContext: "Главная идея - смотреть слово сразу в контексте предложения, а не только иметь прямой перевод слова. Либо можно сначала прочитать текст на родном языке, а потом на изучаемом. Тогда легче будет понимать текст.",
    aboutStudy: "По словам можно кликать, сохраняя их во время чтения, потом повторять в стиле Anki или скачать готовый TSV-файл для импорта в Anki.",
    aboutPet: "Это pet project. Больше заметок о разработке:",
    saved: "Текст сохранен.", deleted: "Текст удален.", copiedAnki: "TSV скопирован.", downloaded: "TSV скачан.", importStepsTitle: "Как добавить новый текст", importStep1: "Сначала настройте тему, уровень и язык заметок ниже.", importStep2: "Скопируйте промпт и вставьте его в ChatGPT или Codex.", importStep3: "Скопируйте JSON в поле импорта или сохраните файл в texts/ и добавьте его имя в texts/index.json.", mappingWarnings: "Предупреждения связей", statActive: "Новые карточки", statArchive: "В архиве", statStudied: "Изучались", statTexts: "Текстов", trayTitle: "Есть новые слова", studyCurrentShort: "Учить", copyAnkiShort: "Anki TSV", resetLocalData: "Сбросить все локальные данные", resetConfirm: "Удалить все локальные тексты, слова, архив, статистику и настройки Sync Reader?", resetDone: "Локальные данные удалены."
  },
  de: {
    appTitle: "Sync Reader", subtitle: "Synchrones Lesen: Russisch und Deutsch", preparePrompt: "Prompt vorbereiten",
    reading: "Lesen", wordReview: "Wortübersicht", rules: "Regeln", rulesTitle: "Deutsche Grammatik A1-B1", stats: "Statistik", about: "Über", library: "Bibliothek", importText: "Neuen Text hinzufügen", searchTexts: "Texte suchen...",
    chooseText: "Text wählen", saveText: "Text speichern", deleteText: "Löschen", russian: "Russisch", german: "Deutsch",
    newWords: "Neue Wörter", studyCurrent: "Wörter dieses Textes lernen", studyAll: "Alle gespeicherten Wörter lernen",
    copyAnki: "TSV kopieren", downloadAnki: "TSV laden", clear: "Leeren", archive: "Wortarchiv",
    studyArchive: "Archiv lernen", restoreArchive: "Archiv zurückholen",
    archiveHint: "Hier bleiben Wörter, die hinzugefügt oder gelernt wurden. Sie werden lokal im Browser gespeichert.",
    generator: "Textimport", topic: "Thema oder Ausgangstext", level: "Niveau", targetHintLanguage: "Notizsprache",
    promptForAi: "Prompt für Codex oder ChatGPT", copyPrompt: "Prompt kopieren", importJson: "JSON importieren",
    pasteJson: "Fertiges JSON einfügen", generatorHint: "Prompt in Codex oder ChatGPT einfügen, dann JSON hier importieren oder in texts/ speichern und den Dateinamen in texts/index.json eintragen. Dateien aus texts werden beim Laden übernommen.",
    showAnswer: "Antwort zeigen", again: "Nochmal", hard: "Schwer", good: "Gut", easy: "Leicht", sentence: "Satz",
    noWords: "Klicke auf ein Wort oder eine Phrase im Text, um eine Karte hinzuzufügen.", noStudy: "Keine Wörter zum Lernen.", done: "Sitzung abgeschlossen.",
    hide: "Ausblenden", show: "Einblenden", words: "Wörter", cards: "Karten", copiedPrompt: "Prompt kopiert.", imported: "Text importiert und gespeichert.",
    allTexts: "Alle Texte", noTexts: "Die Bibliothek enthält keine Texte.", folder: "Ordner", folders: "Ordner", newFolder: "Neuer Ordner", unfiled: "Ohne Ordner", cancel: "Abbrechen", save: "Speichern",
    renameFolder: "Ordner umbenennen", deleteFolder: "Ordner löschen", folderName: "Ordnername", folderAdded: "Ordner hinzugefügt.", folderRenamed: "Ordner umbenannt.", folderDeleted: "Ordner gelöscht. Texte bleiben ohne Ordner.",
    renameLibraryText: "Text umbenennen", moveLibraryText: "Text verschieben", textName: "Textname", textRenamed: "Text umbenannt.", textMoved: "Text verschoben.", deleteTextConfirm: "Diesen Text aus der lokalen Bibliothek löschen?", deleteFolderConfirm: "Ordner löschen? Die Texte bleiben ohne Ordner in der Bibliothek.",
    aboutTitle: "Über Sync Reader", aboutIdea: "Sync Reader wurde aus meiner persönlichen Idee heraus entwickelt, mehr zu lesen. Mir gefiel das Format paralleler Übersetzungen in Büchern, und ich wollte es in einer bequemen Anwendung nachbauen, in der ich beliebige Texte hinzufügen kann.",
    aboutContext: "Die Hauptidee ist, ein Wort sofort im Satzkontext zu sehen und nicht nur eine direkte Wortübersetzung zu haben. Alternativ kann man zuerst den Text in der Muttersprache lesen und danach in der Sprache, die man lernt. So lässt sich der Text leichter verstehen.",
    aboutStudy: "Du kannst Wörter anklicken und sie beim Lesen speichern, sie später im Anki-Stil wiederholen oder eine fertige TSV-Datei für den Import in Anki herunterladen.",
    aboutPet: "Das ist mein Pet Project. Mehr Notizen zur Entwicklung:",
    saved: "Text gespeichert.", deleted: "Text gelöscht.", copiedAnki: "TSV kopiert.", downloaded: "TSV geladen.", importStepsTitle: "Neuen Text hinzufügen", importStep1: "Wähle zuerst Thema, Niveau und Notizsprache unten.", importStep2: "Kopiere den Prompt in ChatGPT oder Codex.", importStep3: "JSON importieren oder in texts/ speichern und den Dateinamen in texts/index.json eintragen.", mappingWarnings: "Verknuepfungswarnungen", statActive: "Neue Karten", statArchive: "Im Archiv", statStudied: "Geübt", statTexts: "Texte", trayTitle: "Neue Wörter vorhanden", studyCurrentShort: "Lernen", copyAnkiShort: "Anki TSV", resetLocalData: "Alle lokalen Daten löschen", resetConfirm: "Alle lokalen Texte, Wörter, Archive, Statistiken und Sync-Reader-Einstellungen löschen?", resetDone: "Lokale Daten gelöscht."
  },
  en: {
    appTitle: "Sync Reader", subtitle: "Synchronized reading: Russian and German", preparePrompt: "Prepare prompt",
    reading: "Reading", wordReview: "Words", rules: "Rules", rulesTitle: "German Grammar A1-B1", stats: "Stats", about: "About", library: "Library", importText: "Add new text", searchTexts: "Search texts...",
    chooseText: "Choose text", saveText: "Save text", deleteText: "Delete", russian: "Russian", german: "German",
    newWords: "New words", studyCurrent: "Study this text", studyAll: "Study all saved words",
    copyAnki: "Copy TSV", downloadAnki: "Download TSV", clear: "Clear", archive: "Word archive",
    studyArchive: "Study archive", restoreArchive: "Move archive to new words",
    archiveHint: "Words that were added or studied stay here. They are stored locally in the browser.",
    generator: "Text import", topic: "Topic or source text", level: "Level", targetHintLanguage: "Note language",
    promptForAi: "Prompt for Codex or ChatGPT", copyPrompt: "Copy prompt", importJson: "Import JSON",
    pasteJson: "Paste generated JSON", generatorHint: "Paste the prompt into Codex or ChatGPT, then import JSON here or save it in texts/ and add its filename to texts/index.json. Files in texts load on page load.",
    showAnswer: "Show answer", again: "Again", hard: "Hard", good: "Good", easy: "Easy", sentence: "Sentence",
    noWords: "Click a word or phrase in the text to add a card.", noStudy: "No words to study.", done: "Session finished.",
    hide: "Hide", show: "Show", words: "words", cards: "cards", copiedPrompt: "Prompt copied.", imported: "Text imported and saved.",
    allTexts: "All texts", noTexts: "The library has no texts.", folder: "Folder", folders: "Folders", newFolder: "New folder", unfiled: "Unfiled", cancel: "Cancel", save: "Save",
    renameFolder: "Rename folder", deleteFolder: "Delete folder", folderName: "Folder name", folderAdded: "Folder added.", folderRenamed: "Folder renamed.", folderDeleted: "Folder deleted. Texts were kept unfiled.",
    renameLibraryText: "Rename text", moveLibraryText: "Move text", textName: "Text name", textRenamed: "Text renamed.", textMoved: "Text moved.", deleteTextConfirm: "Delete this text from the local library?", deleteFolderConfirm: "Delete this folder? Its texts will stay in the library as unfiled.",
    aboutTitle: "About Sync Reader", aboutIdea: "Sync Reader was developed from my personal idea to read more. I liked the parallel translation format in books and decided to recreate it in a convenient application where I can add any text I want.",
    aboutContext: "The main idea is to see a word immediately in sentence context instead of having only a direct word translation. You can also read the text first in your native language and then in the language you are learning. That makes the text easier to understand.",
    aboutStudy: "You can click words and save them while reading, then review them in an Anki-style flow or download a ready-to-use TSV file for Anki import.",
    aboutPet: "This is my pet project. More notes about my work:",
    saved: "Text saved.", deleted: "Text deleted.", copiedAnki: "TSV copied.", downloaded: "TSV downloaded.", importStepsTitle: "How to add a new text", importStep1: "First set the topic, level, and note language below.", importStep2: "Copy the prompt into ChatGPT or Codex.", importStep3: "Paste JSON into the import field or save it in texts/ and add its filename to texts/index.json.", mappingWarnings: "Mapping warnings", statActive: "New cards", statArchive: "Archived", statStudied: "Practiced", statTexts: "Texts", trayTitle: "New words saved", studyCurrentShort: "Study", copyAnkiShort: "Anki TSV", resetLocalData: "Reset all local data", resetConfirm: "Delete all local Sync Reader texts, words, archive, stats, and settings?", resetDone: "Local data deleted."
  }
};

const seedTexts = window.createSeedTexts(normalizeDocument);
const TEXT_FOLDER = "texts";
const TEXT_FILE_LIMIT = 50;
const STORAGE = {
  library: "sync-reader-pairs-v2-library",
  folders: "sync-reader-pairs-v2-folders",
  bundledAdditions: "sync-reader-pairs-v2-bundled-additions",
  currentId: "sync-reader-pairs-v2-current-id",
  flashcards: "sync-reader-pairs-v2-flashcards",
  history: "sync-reader-pairs-v2-word-history"
};
const DEFAULT_LIBRARY_FOLDERS = [
  { id: "wicos-neg", name: "Wicos Neg A2" },
  { id: "level-a2", name: "A2" },
  { id: "level-c1", name: "C1" }
];
const LEVEL_FOLDER_IDS = { A2: "level-a2", C1: "level-c1" };
const BUNDLED_LIBRARY_ADDITION_IDS = new Set([
  "a2-geld-bank-kapitel1-v3",
  "a2-wicos-neg-kapitel2-family",
  "a2-wicos-neg-kapitel3-wg",
  "a2-wicos-neg-kapitel4-transport",
  "a2-wicos-neg-kapitel5-termine"
]);
const schemaExample = {
  id: "custom-id",
  title: "Заголовок / Titel",
  level: "A2",
  topic: "topic",
  source: "user generated",
  hintLanguage: "ru",
  p: [
    [
      "p1",
      [
        [
          "Русское предложение.",
          "Deutscher Satz.",
          [
            ["Deutscher", "Русское", "", "Окончание -er для мужского рода в именительном падеже."],
            ["Satz", "предложение", "", "Der Satz: мужской род, именительный падеж."]
          ]
        ]
      ]
    ]
  ]
};

let uiLang = localStorage.getItem("sync-reader-ui-lang") || "ru";
let activeView = localStorage.getItem("sync-reader-view") || "reading";
let library = loadLibrary();
let libraryFolders = loadLibraryFolders(library);
let currentDocument = loadCurrentDocument();
let flashcards = loadJson(STORAGE.flashcards, []);
let wordHistory = loadJson(STORAGE.history, []);
let study = null;
let libraryDialogState = null;
const els = {};

document.addEventListener("DOMContentLoaded", () => {
  [
    "appRoot", "openGenerator", "closeGenerator", "generatorDrawer", "topicInput", "levelInput",
    "promptOutput", "copyPrompt", "jsonInput", "importJson", "status", "textSelect", "libraryList", "librarySearch", "newFolder",
    "libraryDialog", "libraryDialogForm", "libraryDialogTitle", "libraryDialogNameField", "libraryDialogLabel", "libraryDialogName", "libraryDialogFolderField", "libraryDialogFolder", "libraryDialogSubmit", "closeLibraryDialog", "cancelLibraryDialog",
    "docMeta", "currentTitle", "reader", "ruText", "deText", "ruCount", "deCount", "pane-ru", "pane-de", "toggleRussian", "toggleGerman",
    "swapTexts", "toggleZen", "toggleLibrary", "wordsView", "rulesView", "statsView", "aboutView", "overviewStudyCurrent", "resetLocalData", "statActive", "statArchive", "statStudied", "statTexts",
    "flashCount", "historyCount", "flashList", "historyList", "readingWordTray", "trayCount", "startStudyCurrent", "startStudyAll", "startStudyArchive", "restoreArchive", "copyAnki", "downloadAnki", "openWordsFromTray",
    "clearFlashcards", "studyModal", "closeStudy", "studyTitle", "studyProgressText", "studyQueueText",
    "studyProgress", "studyCard", "studyFront", "studyBack", "showAnswer", "studyActions"
  ].forEach((id) => els[id] = document.getElementById(id));

  els.closeStudy.innerHTML = iconSvg("sr-close");
  updateLanguageButtons();
  bindEvents();
  applyI18n();
  loadExternalTexts().then(() => {
    renderTextOptions();
    render();
    renderFlashcards();
    renderHistory();
    renderStats();
  });
  renderTextOptions();
  render();
  renderFlashcards();
  renderHistory();
  renderStats();
  updatePrompt();
});

function bindEvents() {
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.viewTarget));
  });
  setView(activeView);
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      uiLang = button.dataset.lang;
      localStorage.setItem("sync-reader-ui-lang", uiLang);
      updateLanguageButtons();
      applyI18n();
      render();
      renderFlashcards();
      renderHistory();
      renderStats();
      updateStudyUi();
    });
  });
  els.swapTexts.addEventListener("click", () => {
    els.reader.classList.toggle("swapped");
    localStorage.setItem("sync-reader-swapped", els.reader.classList.contains("swapped") ? "1" : "0");
  });
  els.toggleZen.addEventListener("click", () => {
    els.appRoot.classList.toggle("zen");
  });
  els.toggleLibrary.addEventListener("click", () => {
    els.appRoot.classList.toggle("library-collapsed");
    localStorage.setItem("sync-reader-library-collapsed", els.appRoot.classList.contains("library-collapsed") ? "1" : "0");
  });
  if (localStorage.getItem("sync-reader-library-collapsed") === "1") els.appRoot.classList.add("library-collapsed");
  const savedSwap = localStorage.getItem("sync-reader-swapped");
  if (savedSwap === null || savedSwap === "1") els.reader.classList.add("swapped");
  els.librarySearch.addEventListener("input", renderTextOptions);
  els.openGenerator.addEventListener("click", () => openDrawer(true));
  els.newFolder.addEventListener("click", () => openLibraryDialog("new-folder"));
  els.closeGenerator.addEventListener("click", () => openDrawer(false));
  els.generatorDrawer.addEventListener("click", (event) => { if (event.target === els.generatorDrawer) openDrawer(false); });
  els.topicInput.addEventListener("input", updatePrompt);
  els.levelInput.addEventListener("change", updatePrompt);
  els.copyPrompt.addEventListener("click", copyPrompt);
  els.importJson.addEventListener("click", importJson);
  els.libraryDialogForm.addEventListener("submit", submitLibraryDialog);
  els.closeLibraryDialog.addEventListener("click", closeLibraryDialog);
  els.cancelLibraryDialog.addEventListener("click", closeLibraryDialog);
  els.libraryDialog.addEventListener("click", (event) => { if (event.target === els.libraryDialog) closeLibraryDialog(); });
  els.textSelect.addEventListener("change", () => {
    const nextDocument = library.find((doc) => doc.id === els.textSelect.value) || library[0];
    if (!nextDocument) return;
    currentDocument = structuredClone(nextDocument);
    persistCurrentDocument();
    render();
  });
  els.toggleRussian.addEventListener("click", () => togglePane("ru"));
  els.toggleGerman.addEventListener("click", () => togglePane("de"));
  els.startStudyCurrent.addEventListener("click", () => startStudy("current"));
  els.startStudyAll.addEventListener("click", () => startStudy("all"));
  els.overviewStudyCurrent.addEventListener("click", () => startStudy("current"));
  els.startStudyArchive.addEventListener("click", () => startStudy("archive"));
  els.restoreArchive.addEventListener("click", restoreArchiveToFlashcards);
  els.openWordsFromTray.addEventListener("click", () => setView("words"));
  els.closeStudy.addEventListener("click", closeStudy);
  els.studyModal.addEventListener("click", (event) => { if (event.target === els.studyModal) closeStudy(); });
  els.showAnswer.addEventListener("click", revealAnswer);
  document.querySelectorAll("[data-grade]").forEach((button) => {
    button.addEventListener("click", () => gradeCurrent(button.dataset.grade));
  });
  document.addEventListener("keydown", handleStudyKeys);
  els.copyAnki.addEventListener("click", copyAnki);
  els.downloadAnki.addEventListener("click", downloadAnki);
  els.resetLocalData.addEventListener("click", resetLocalData);
  els.clearFlashcards.addEventListener("click", () => {
    flashcards = [];
    saveJson(STORAGE.flashcards, flashcards);
    renderFlashcards();
    render();
  });
  document.body.addEventListener("mouseover", (event) => {
    const token = event.target.closest(".token");
    if (token) setActiveToken(token.dataset.tokenIds || token.dataset.tokenId);
  });
  document.body.addEventListener("mouseout", (event) => {
    if (event.target.closest(".token")) clearActiveTokens();
  });
  document.body.addEventListener("click", (event) => {
    const token = event.target.closest(".token");
    if (token) toggleFlashcard(token.dataset.tokenId, token.dataset.lang);
  });
}

function applyI18n() {
  document.documentElement.lang = uiLang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  updateStudyButtonLabels();
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  updateLanguageButtons();
  els.toggleRussian.title = `${isHidden("ru") ? t("show") : t("hide")} ${t("russian")}`;
  els.toggleGerman.title = `${isHidden("de") ? t("show") : t("hide")} ${t("german")}`;
}

function updateStudyButtonLabels() {
  setShortcutLabel(els.showAnswer, t("showAnswer"), "Space");
  document.querySelectorAll("[data-grade]").forEach((button) => {
    const shortcuts = { again: "1", hard: "2", good: "3", easy: "4" };
    const grade = button.dataset.grade;
    setShortcutLabel(button, t(grade), shortcuts[grade]);
  });
}

function setShortcutLabel(button, label, shortcut) {
  if (!button) return;
  button.innerHTML = `${escapeHtml(label)} <span class="shortcut">${escapeHtml(shortcut)}</span>`;
  button.title = `${label} (${shortcut})`;
}

function updateLanguageButtons() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === uiLang);
  });
}

function t(key) {
  return i18n[uiLang][key] || i18n.ru[key] || key;
}

function setView(view) {
  activeView = ["reading", "words", "rules", "stats", "about"].includes(view) ? view : "reading";
  localStorage.setItem("sync-reader-view", activeView);
  els.appRoot.dataset.view = activeView;
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    button.classList.toggle("active", button.dataset.viewTarget === activeView);
  });
  if (activeView === "words") {
    renderFlashcards();
    renderHistory();
  }
  if (activeView === "stats") renderStats();
  updateReadingTray();
}

function openDrawer(open) {
  els.generatorDrawer.classList.toggle("open", open);
  els.generatorDrawer.setAttribute("aria-hidden", String(!open));
  if (open) els.topicInput.focus();
}

function render() {
  if (!currentDocument) {
    els.currentTitle.textContent = "";
    els.docMeta.innerHTML = "";
    els.ruText.innerHTML = "";
    els.deText.innerHTML = "";
    els.ruCount.textContent = `0 ${t("words")}`;
    els.deCount.textContent = `0 ${t("words")}`;
    updatePaneVisibility();
    updateReadingTray();
    return;
  }
  normalizeDocument(currentDocument);
  persistCurrentDocument();
  els.currentTitle.textContent = currentDocument.title || "";
  els.docMeta.innerHTML = "";
  [currentDocument.level, currentDocument.topic].filter(Boolean).forEach((item) => {
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = item;
    els.docMeta.appendChild(pill);
  });
  renderLanguage("left", els.ruText);
  renderLanguage("right", els.deText);
  els.ruCount.textContent = `${countTokens("left")} ${t("words")}`;
  els.deCount.textContent = `${countTokens("right")} ${t("words")}`;
  updatePaneVisibility();
  updateReadingTray();
}

function renderLanguage(side, container) {
  container.innerHTML = "";
  if (!currentDocument) return;
  const lang = side === "left" ? "ru" : "de";
  currentDocument.paragraphs.forEach((paragraph) => {
    const block = document.createElement("section");
    block.className = "paragraph";
    const body = document.createElement("p");
    body.className = "text-body";
    buildParagraphPieces(paragraph, side).forEach((piece) => {
      if (piece.type === "text") {
        body.appendChild(document.createTextNode(piece.value));
        return;
      }
      const token = piece.token;
      const span = document.createElement("span");
      span.className = `token ${isUnknown(token.id, lang) ? "unknown" : ""}`;
      span.dataset.tokenId = token.id;
      span.dataset.tokenIds = piece.tokenIds.join(" ");
      span.dataset.lang = lang;
      span.textContent = piece.value;
      body.appendChild(span);
    });
    block.appendChild(body);
    container.appendChild(block);
  });
}

function buildParagraphPieces(paragraph, side) {
  const text = paragraph[side] || "";
  const pieces = [];
  const placements = [];
  const alignedSentenceRanges = findAlignedSentenceRanges(paragraph, side);

  paragraph.tokens.forEach((token) => {
    const parts = side === "left" ? token.leftParts : token.rightParts;
    const sentenceRange = alignedSentenceRanges.get(token.id);
    const joinedPlacement = side === "right" ? findJoinedGermanTokenPlacement(text, parts, placements, sentenceRange) : null;
    if (joinedPlacement) {
      placements.push({ type: "token", token, tokenIds: [token.id], ...joinedPlacement });
      return;
    }
    parts.forEach((phrase) => {
      if (!phrase) return;
      const index = findFreeIndex(text, phrase, placements, sentenceRange);
      if (index < 0) {
        addSharedPlacementToken(text, phrase, placements, token, sentenceRange);
        return;
      }
      placements.push({
        type: "token",
        token,
        tokenIds: [token.id],
        value: phrase,
        index,
        end: index + phrase.length
      });
    });
  });

  placements.sort((a, b) => a.index - b.index);
  let cursor = 0;
  placements.forEach((placement) => {
    if (placement.index < cursor) return;
    if (placement.index > cursor) pieces.push({ type: "text", value: text.slice(cursor, placement.index) });
    pieces.push({ type: "token", token: placement.token, tokenIds: placement.tokenIds, value: placement.value });
    cursor = placement.end;
  });
  if (cursor < text.length) pieces.push({ type: "text", value: text.slice(cursor) });
  return pieces.length ? pieces : [{ type: "text", value: text }];
}

function findAlignedSentenceRanges(paragraph, side) {
  if (paragraph.sentences?.length) {
    const ranges = explicitSentenceRanges(paragraph, side);
    const alignedRanges = new Map();
    paragraph.tokens.forEach((token) => {
      const range = ranges[token.sentenceIndex];
      if (range) alignedRanges.set(token.id, range);
    });
    return alignedRanges;
  }
  if (side !== "left") return new Map();
  const textRanges = sentenceRanges(paragraph[side] || "");
  const pairedText = paragraph.right || "";
  const pairedRanges = sentenceRanges(pairedText);
  if (textRanges.length !== pairedRanges.length) return new Map();

  const pairedPlacements = [];
  const alignedRanges = new Map();
  paragraph.tokens.forEach((token) => {
    const placement = placeTokenPart(pairedText, "right", token.rightParts, pairedPlacements);
    if (!placement) return;
    pairedPlacements.push(placement);
    const sentenceIndex = findSentenceRangeIndex(pairedRanges, placement.index);
    if (sentenceIndex >= 0) alignedRanges.set(token.id, textRanges[sentenceIndex]);
  });
  return alignedRanges;
}

function explicitSentenceRanges(paragraph, side) {
  const key = side === "left" ? "left" : "right";
  let cursor = 0;
  return paragraph.sentences.map((sentence) => {
    const text = sentence[key] || "";
    const range = { start: cursor, end: cursor + text.length };
    cursor = range.end + 1;
    return range;
  });
}

function placeTokenPart(text, side, parts, placements) {
  const joinedPlacement = side === "right" ? findJoinedGermanTokenPlacement(text, parts, placements) : null;
  if (joinedPlacement) return joinedPlacement;
  for (const phrase of parts) {
    if (!phrase) continue;
    const index = findFreeIndex(text, phrase, placements);
    if (index >= 0) return { value: phrase, index, end: index + phrase.length };
  }
  return null;
}

function addSharedPlacementToken(text, phrase, placements, token, range) {
  const sharedPlacement = findSharedPlacement(text, phrase, placements, range);
  if (!sharedPlacement || sharedPlacement.tokenIds.includes(token.id)) return false;
  sharedPlacement.tokenIds.push(token.id);
  return true;
}

function findSharedPlacement(text, phrase, placements, range) {
  const start = range?.start || 0;
  const limit = range?.end || text.length;
  return placements.find((placement) => {
    if (placement.index < start || placement.end > limit) return false;
    if (placement.end - placement.index !== phrase.length) return false;
    return text.slice(placement.index, placement.end) === phrase;
  }) || null;
}

function sentenceRanges(text) {
  const ranges = [];
  let start = 0;
  for (const match of String(text || "").matchAll(/[.!?]+/gu)) {
    const end = match.index + match[0].length;
    if (text.slice(start, end).trim()) ranges.push({ start, end });
    start = end;
  }
  if (text.slice(start).trim()) ranges.push({ start, end: text.length });
  return ranges;
}

function findSentenceRangeIndex(ranges, index) {
  return ranges.findIndex((range) => index >= range.start && index < range.end);
}

function findJoinedGermanTokenPlacement(text, parts, placements, range) {
  if (parts.length !== 2 || !parts.every(isWordPart)) return null;
  // Generated pairs keep separable verbs split even when clauses join prefix and verb.
  const candidates = [`${parts[1]}${parts[0]}`, `${parts[0]}${parts[1]}`];
  for (const phrase of candidates) {
    const index = findFreeIndex(text, phrase, placements, range);
    if (index >= 0) return { value: text.slice(index, index + phrase.length), index, end: index + phrase.length };
  }
  return null;
}

function findFreeIndex(text, phrase, placements, range) {
  let start = range?.start || 0;
  const limit = range?.end || text.length;
  while (start < limit) {
    const index = text.indexOf(phrase, start);
    if (index < 0 || index + phrase.length > limit) return -1;
    const end = index + phrase.length;
    const overlaps = placements.some((item) => index < item.end && end > item.index);
    if (!overlaps && hasPhraseBoundary(text, index, end)) return index;
    start = index + 1;
  }
  return -1;
}

function hasPhraseBoundary(text, start, end) {
  return !isWordChar(text[start - 1]) && !isWordChar(text[end]);
}

function isWordChar(char) {
  return !!char && /[\p{L}\p{N}-]/u.test(char);
}

function isWordPart(value) {
  return /^[\p{L}\p{N}-]+$/u.test(String(value || ""));
}

function uniqueExplanations(...items) {
  const unique = [];
  items.filter(Boolean).forEach((item) => {
    const normalized = normalKey(item);
    if (!unique.some((saved) => normalKey(saved) === normalized)) unique.push(item);
  });
  return unique.join("\n\n");
}

function togglePane(lang) {
  localStorage.setItem(`sync-reader-hide-${lang}`, isHidden(lang) ? "0" : "1");
  updatePaneVisibility();
  applyI18n();
  // Toggle clicks can leave hover-linked tokens active until the pointer moves again.
  clearActiveTokens();
}

function isHidden(lang) {
  return localStorage.getItem(`sync-reader-hide-${lang}`) === "1";
}

function updatePaneVisibility() {
  els["pane-ru"].classList.toggle("hidden-text", isHidden("ru"));
  els["pane-de"].classList.toggle("hidden-text", isHidden("de"));
  els.toggleRussian.innerHTML = iconSvg(isHidden("ru") ? "sr-eye" : "sr-eye-off");
  els.toggleGerman.innerHTML = iconSvg(isHidden("de") ? "sr-eye" : "sr-eye-off");
}

function setActiveToken(tokenIds) {
  clearActiveTokens();
  const selectors = String(tokenIds || "")
    .split(/\s+/)
    .filter(Boolean)
    .map((tokenId) => `[data-token-ids~="${cssEscape(tokenId)}"]`);
  if (!selectors.length) return;
  document.querySelectorAll(selectors.join(",")).forEach((node) => node.classList.add("active"));
}

function clearActiveTokens() {
  document.querySelectorAll(".token.active").forEach((node) => node.classList.remove("active"));
}

function toggleFlashcard(tokenId, lang) {
  const token = findToken(tokenId);
  const paragraph = findParagraphForToken(tokenId);
  if (!token || !paragraph) return;
  const sourceSide = lang === "ru" ? "left" : "right";
  const targetSide = lang === "ru" ? "right" : "left";
  const key = `${lang}:${normalKey(token[sourceSide])}`;
  const existingIndex = flashcards.findIndex((card) => card.key === key);
  if (existingIndex >= 0) {
    flashcards.splice(existingIndex, 1);
  } else {
    const card = {
      key, tokenId, textId: currentDocument.id, textTitle: currentDocument.title, lang,
      source: token[sourceSide], translation: token[targetSide],
      formTip: token.formTip || "", sentenceNote: token.sentenceNote || "",
      note: token.note || "", sentence: findSentenceForToken(paragraph, token, sourceSide) || paragraph[sourceSide] || "",
      addedAt: new Date().toISOString(), interval: 0, ease: 2.5, reps: 0, due: Date.now()
    };
    flashcards.unshift(card);
    upsertHistory(card);
  }
  saveJson(STORAGE.flashcards, flashcards);
  saveJson(STORAGE.history, wordHistory);
  renderFlashcards();
  renderHistory();
  render();
}

function renderFlashcards() {
  els.flashCount.textContent = `${flashcards.length} ${t("cards")}`;
  els.historyCount.textContent = `${wordHistory.length}`;
  els.flashList.innerHTML = "";
  if (!flashcards.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = t("noWords");
    els.flashList.appendChild(empty);
    updateReadingTray();
    renderStats();
    return;
  }
  flashcards.forEach((card) => {
    els.flashList.appendChild(createFlashcardNode(card));
  });
  updateReadingTray();
  renderStats();
}

function createFlashcardNode(card) {
  const node = document.createElement("article");
  node.className = "flash-card";
  node.innerHTML = `
    <div class="term">${escapeHtml(card.source)} <span class="pill">${card.lang.toUpperCase()}</span></div>
    <div class="translation">${escapeHtml(card.translation)}</div>
  `;
  const button = document.createElement("button");
  button.className = "remove";
  button.type = "button";
  button.title = t("deleteText");
  button.setAttribute("aria-label", t("deleteText"));
  button.innerHTML = buttonIcon("sr-trash");
  button.addEventListener("click", () => {
    flashcards = flashcards.filter((item) => item.key !== card.key);
    saveJson(STORAGE.flashcards, flashcards);
    renderFlashcards();
    render();
  });
  node.appendChild(button);
  return node;
}

function updateReadingTray() {
  if (!els.readingWordTray) return;
  if (!currentDocument) {
    els.readingWordTray.hidden = true;
    els.appRoot.classList.remove("tray-open");
    return;
  }
  const currentCards = flashcards.filter((card) => card.textId === currentDocument.id);
  const visible = activeView === "reading" && currentCards.length > 0;
  els.readingWordTray.hidden = !visible;
  els.appRoot.classList.toggle("tray-open", visible);
  els.trayCount.textContent = `${currentCards.length} ${t("cards")}`;
}

function renderHistory() {
  els.historyCount.textContent = `${wordHistory.length}`;
  els.historyList.innerHTML = "";
  if (!wordHistory.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = t("archiveHint");
    els.historyList.appendChild(empty);
    renderStats();
    return;
  }
  wordHistory.slice(0, 40).forEach((card) => {
    const node = document.createElement("article");
    node.className = "flash-card";
    node.innerHTML = `
      <div class="term">${escapeHtml(card.source)} <span class="pill">${card.lang.toUpperCase()}</span></div>
      <div class="translation">${escapeHtml(card.translation)}</div>
    `;
    const button = document.createElement("button");
    button.className = "remove";
    button.type = "button";
    button.title = t("restoreArchive");
    button.setAttribute("aria-label", t("restoreArchive"));
    button.innerHTML = buttonIcon("sr-archive");
    button.addEventListener("click", () => restoreArchivedCard(card));
    node.appendChild(button);
    els.historyList.appendChild(node);
  });
  renderStats();
}

function renderStats() {
  if (!els.statActive) return;
  els.statActive.textContent = String(flashcards.length);
  els.statArchive.textContent = String(wordHistory.length);
  els.statStudied.textContent = String(wordHistory.filter((card) => (card.reps || 0) > 0).length);
  els.statTexts.textContent = String(library.length);
}

function buttonIcon(id) {
  return `<svg class="icon" aria-hidden="true"><use href="${iconHref(id)}"></use></svg>`;
}

function restoreArchivedCard(card) {
  if (!flashcards.some((item) => item.key === card.key)) {
    flashcards.unshift({ ...card, due: Date.now() });
    saveJson(STORAGE.flashcards, flashcards);
  }
  renderFlashcards();
  renderHistory();
  render();
}

function restoreArchiveToFlashcards() {
  wordHistory.forEach((card) => {
    if (!flashcards.some((item) => item.key === card.key)) {
      flashcards.unshift({ ...card, due: Date.now() });
    }
  });
  saveJson(STORAGE.flashcards, flashcards);
  renderFlashcards();
  renderHistory();
  render();
}

function startStudy(scope) {
  const cards = scope === "archive"
    ? [...wordHistory]
    : scope === "all"
      ? [...flashcards]
      : currentDocument
        ? flashcards.filter((card) => card.textId === currentDocument.id)
        : [];
  if (!cards.length) {
    setStatus(t("noStudy"));
    return;
  }
  study = {
    scope,
    queue: cards.sort((a, b) => (a.due || 0) - (b.due || 0)),
    done: 0,
    total: cards.length,
    current: null,
    revealed: false
  };
  els.studyModal.classList.add("open");
  els.studyModal.setAttribute("aria-hidden", "false");
  nextStudyCard();
}

function nextStudyCard() {
  if (!study || !study.queue.length) {
    finishStudy();
    return;
  }
  study.current = study.queue.shift();
  study.revealed = false;
  els.studyActions.hidden = false;
  els.showAnswer.hidden = false;
  els.studyCard.classList.remove("revealed");
  els.studyActions.classList.remove("revealed");
  els.studyFront.textContent = study.current.source;
  renderStudyBack(study.current);
  updateStudyUi();
}

function renderStudyBack(card) {
  els.studyBack.innerHTML = "";
  const translation = document.createElement("strong");
  translation.textContent = card.translation;
  els.studyBack.appendChild(translation);
  const sourceSentence = card.sentence || findSentenceForCard(card);
  if (sourceSentence) {
    const sentence = document.createElement("div");
    sentence.className = "study-sentence";
    const label = document.createElement("span");
    label.textContent = `${t("sentence")}:`;
    sentence.appendChild(label);
    sentence.appendChild(document.createTextNode(` ${sourceSentence}`));
    els.studyBack.appendChild(sentence);
  }
  [uniqueExplanations(card.note, card.formTip), card.sentenceNote].filter(Boolean).forEach((text) => {
    const block = document.createElement("div");
    block.textContent = text;
    els.studyBack.appendChild(block);
  });
}

function revealAnswer() {
  if (!study?.current) return;
  study.revealed = true;
  els.studyCard.classList.add("revealed");
  els.studyActions.classList.add("revealed");
}

function handleStudyKeys(event) {
  if (!study || !els.studyModal.classList.contains("open")) return;
  if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;
  if (event.code === "Space") {
    event.preventDefault();
    if (!study.revealed) revealAnswer();
    return;
  }
  const grades = { Digit1: "again", Numpad1: "again", Digit2: "hard", Numpad2: "hard", Digit3: "good", Numpad3: "good", Digit4: "easy", Numpad4: "easy" };
  const grade = grades[event.code];
  if (grade && study.revealed) {
    event.preventDefault();
    gradeCurrent(grade);
  }
}

function gradeCurrent(grade) {
  if (!study?.current) return;
  const card = study.current;
  if (!study.revealed) {
    revealAnswer();
    return;
  }
  const now = Date.now();
  card.reps = (card.reps || 0) + 1;
  if (grade === "again") {
    card.interval = 0;
    card.due = now + 60 * 1000;
    study.queue.splice(Math.min(2, study.queue.length), 0, card);
  } else if (grade === "hard") {
    card.interval = Math.max(1, Math.round((card.interval || 1) * 1.2));
    card.due = now + 6 * 60 * 60 * 1000;
    study.queue.push(card);
  } else {
    const multiplier = grade === "easy" ? 3.2 : 2.2;
    card.interval = Math.max(1, Math.round((card.interval || 1) * multiplier));
    card.due = now + card.interval * 24 * 60 * 60 * 1000;
    study.done += 1;
    if (grade === "easy" || card.reps >= 2) {
      removeActiveCard(card.key);
    } else {
      study.queue.push(card);
    }
  }
  upsertHistory(card);
  saveJson(STORAGE.flashcards, flashcards);
  saveJson(STORAGE.history, wordHistory);
  renderFlashcards();
  renderHistory();
  render();
  nextStudyCard();
}

function finishStudy() {
  if (!study) return;
  els.studyFront.textContent = t("done");
  els.studyBack.innerHTML = "";
  els.studyCard.classList.remove("revealed");
  els.studyActions.classList.remove("revealed");
  els.studyActions.hidden = true;
  els.showAnswer.hidden = true;
  study.current = null;
  study.done = study.total;
  updateStudyUi();
  renderFlashcards();
  renderHistory();
  render();
}

function closeStudy() {
  els.studyModal.classList.remove("open");
  els.studyModal.setAttribute("aria-hidden", "true");
  study = null;
}

function updateStudyUi() {
  if (!els.studyModal || !study) return;
  const complete = Math.min(study.done, study.total);
  els.studyTitle.textContent = t("newWords");
  els.studyProgressText.textContent = `${complete} / ${study.total}`;
  els.studyQueueText.textContent = `${study.queue.length} ${t("cards")}`;
  els.studyProgress.style.width = `${study.total ? (complete / study.total) * 100 : 0}%`;
}

function removeActiveCard(key) {
  flashcards = flashcards.filter((card) => card.key !== key);
}

function upsertHistory(card) {
  const existing = wordHistory.findIndex((item) => item.key === card.key);
  const saved = { ...card, lastSeenAt: new Date().toISOString() };
  if (existing >= 0) wordHistory[existing] = { ...wordHistory[existing], ...saved };
  else wordHistory.unshift(saved);
}

async function copyPrompt() {
  updatePrompt();
  try {
    await navigator.clipboard.writeText(els.promptOutput.value);
    setStatus(t("copiedPrompt"));
  } catch {
    els.promptOutput.select();
  }
}

function updatePrompt() {
  if (!els.promptOutput) return;
  els.promptOutput.value = buildPrompt();
}

function buildPrompt() {
  const level = els.levelInput?.value || "A2";
  const topic = els.topicInput?.value.trim() || "актуальная новость или короткая история";
  return [
    "Создай максимально компактный JSON для приложения синхронного чтения RU/DE.",
    "",
    "Языки:",
    "- русский текст: поле RU",
    "- немецкий текст: поле DE",
    "- все подсказки и объяснения: только на русском языке",
    "- объясняй только немецкий язык: форму, артикль, падеж, порядок слов, времена, приставки, отделяемые приставки, управление и устойчивые выражения",
    "",
    `Уровень CEFR: ${level}`,
    `Тема/источник: ${topic}`,
    "",
    "Формат должен быть коротким:",
    "- Верни только валидный JSON без markdown. Сделай JSON minified: в одну строку, без переносов строк и лишних пробелов.",
    "- Не используй words, word ids, links, tokens, lemma, meaning, leftParts, rightParts, sentenceNotes.",
    "- Используй поле p вместо paragraphs.",
    "- Каждый абзац: [id, sentences].",
    "- sentences: массив предложений [RU sentence, DE sentence, pairs]. Не складывай pairs всего абзаца в один массив.",
    "- В каждом предложении pairs: массив коротких соответствий [DE, RU, tip?, formTip?, sentenceTip?].",
    "- Каждая pair должна связывать фрагменты только внутри своего RU/DE предложения. Это нужно для повторяющихся слов.",
    "- Главный принцип: одна pair = одно немецкое слово или одна немецкая грамматическая мини-группа.",
    "- DE и RU в pair должны быть видимыми словами/короткими фрагментами из соответствующего предложения, не id.",
    "- RU тоже должен точно встречаться в этом русском предложении как видимый фрагмент. Не выдумывай служебный перевод, если его нет в русском тексте: для немецкого es не ставь «это», если отдельного «это» нет в русском предложении.",
    "- Артикли, притяжательные слова и указательные слова НЕ делай отдельными pair. Связывай их с существительным массивом видимых частей: [[\"die\", \"Natur\"], \"природу\", \"Die Natur: женский род, винительный падеж.\"]. Тогда приложение подсветит и артикль, и слово.",
    "- Для отделяемых немецких глаголов DE должен быть массивом видимых частей только если они реально разделены в предложении: [[\"zeichnet\", \"auf\"], \"записывает\", \"Aufzeichnen = записывать звук.\", \"Отделяемая приставка auf стоит в конце рамки.\", \"Личная форма zeichnen стоит на позиции 2, приставка закрывает предложение.\"].",
    "- Если отделяемый глагол виден слитно, используй слитное видимое слово из предложения: [\"abhebt\", \"снимать\"], а не [\"hebt\", \"ab\"].",
    "- Для отделяемой приставки указывай только отдельное видимое слово-приставку. Никогда не бери буквы внутри другого слова: Jeans - это одно слово, в нем нельзя выделять an.",
    "- Каждая строка DE должна совпадать с полным видимым словом или фразой по границам слова. Не используй куски внутри слов.",
    "- Делай пары постепенно: глагол отдельно, отрицание отдельно, прилагательное отдельно, наречие отдельно; артикль/детерминатив вместе с существительным.",
    "- Обязательно покрой pairs все видимые слова в каждом RU и DE предложении. Каждое слово должно находиться хотя бы в одной pair, иначе импорт покажет предупреждение.",
    "- Не объединяй целое предложение в одну pair.",
    "- Группируй только грамматические мини-группы: артикль+существительное, детерминатив+существительное, отделяемый глагол как массив частей, устойчивое выражение или короткий предлог с артиклем вроде im/am/zum.",
    "- Не делай всю именную группу одной pair. Например eine kleine, aber angenehme Nachricht надо разбить на [[\"eine\", \"Nachricht\"], \"новость\"], [\"kleine\", \"небольшая\"], [\"aber\", \"но\"], [\"angenehme\", \"приятная\"].",
    "- tip добавляй только для контекстного значения или синонимов.",
    "- formTip добавляй только если есть конкретная грамматика немецкого: артикль, падеж, окончание прилагательного, множественное число, время, спряжение, отделяемая приставка, zu-инфинитив, управление предлога.",
    "- sentenceTip добавляй только если важна конструкция немецкого предложения: позиция глагола, рамка, придаточное, инфинитивная группа, порядок слов.",
    "- Если полезной подсказки нет, не добавляй пустые элементы после RU. Например: [\"Heute\", \"Сегодня\"].",
    "- Не пиши общие фразы вроде «важное слово», «смотрите на контекст», «это связывает идеи».",
    "- Не объясняй русский язык.",
    "- Минимум 20 предложений всего, 3-5 абзацев.",
    "- Темы новостей только неполитические: наука, природа, технологии, культура, здоровье, путешествия, образование, городская жизнь, бытовая экономика.",
    "- Если это новость, перескажи своими учебными словами, не копируй источник.",
    "",
    "Пример схемы:",
    JSON.stringify(schemaExample, null, 2)
  ].join("\n");
}

function importJson() {
  try {
    const rawDocument = JSON.parse(els.jsonInput.value);
    const validation = validateTextMapping(rawDocument);
    if (validation.errors.length) throw new Error(formatTextIssue(validation.errors[0]));
    const parsed = normalizeDocument(rawDocument);
    parsed.id = parsed.id || `user-${Date.now()}`;
    parsed.source = parsed.source || "user generated";
    currentDocument = parsed;
    upsertDocument(currentDocument);
    persistCurrentDocument();
    renderTextOptions();
    render();
    if (validation.warnings.length) {
      setStatus(formatImportWarnings(validation.warnings));
    } else {
      setStatus(t("imported"));
      openDrawer(false);
    }
  } catch (error) {
    setStatus(error.message);
  }
}

function validateTextMapping(doc) {
  return textFormat.validateDocument(doc);
}

function formatImportWarnings(warnings) {
  return `${t("imported")} ${t("mappingWarnings")}: ${warnings.length}. ${formatTextIssue(warnings[0])}`;
}

function formatTextIssue(entry) {
  return `${entry.path}: ${entry.message}`;
}

function renderTextOptions() {
  els.textSelect.innerHTML = "";
  els.libraryList.innerHTML = "";
  const query = (els.librarySearch?.value || "").trim().toLocaleLowerCase();
  const filtered = library.filter((doc) => !query || `${doc.title} ${doc.level} ${doc.topic}`.toLocaleLowerCase().includes(query));
  const currentId = currentDocument?.id;
  library.forEach((doc) => {
    const option = document.createElement("option");
    option.value = doc.id;
    option.textContent = `${doc.title} · ${doc.level}`;
    if (doc.id === currentId) option.selected = true;
    els.textSelect.appendChild(option);
  });
  renderLibraryGroups(filtered, query, currentId);
}

function renderLibraryGroups(filtered, query, currentId) {
  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty library-empty";
    empty.textContent = t("noTexts");
    els.libraryList.appendChild(empty);
    return;
  }
  libraryFolders.forEach((folder) => {
    const docs = filtered.filter((doc) => doc.folderId === folder.id);
    if (!docs.length && query) return;
    els.libraryList.appendChild(createLibraryFolderNode(folder, docs, currentId));
  });
  const folderIds = new Set(libraryFolders.map((folder) => folder.id));
  const unfiled = filtered.filter((doc) => !doc.folderId || !folderIds.has(doc.folderId));
  if (unfiled.length) els.libraryList.appendChild(createLibraryFolderNode(null, unfiled, currentId));
}

function createLibraryFolderNode(folder, docs, currentId) {
  const group = document.createElement("section");
  group.className = `library-folder ${folder?.collapsed ? "collapsed" : ""}`;

  const head = document.createElement("div");
  head.className = "library-folder-head";
  const toggle = document.createElement("button");
  toggle.className = "library-folder-toggle";
  toggle.type = "button";
  toggle.innerHTML = `
    ${buttonIcon("sr-chevron")}
    ${buttonIcon(folder ? "sr-folder" : "sr-library")}
    <span>${escapeHtml(folder?.name || t("unfiled"))}</span>
    <strong>${docs.length}</strong>
  `;
  toggle.addEventListener("click", () => {
    if (!folder) return;
    folder.collapsed = !folder.collapsed;
    saveLibraryState();
    renderTextOptions();
  });
  head.appendChild(toggle);
  if (folder) head.appendChild(createFolderMenu(folder));
  group.appendChild(head);

  const list = document.createElement("div");
  list.className = "library-folder-texts";
  docs.forEach((doc) => list.appendChild(createLibraryTextNode(doc, currentId)));
  group.appendChild(list);
  return group;
}

function createLibraryTextNode(doc, currentId) {
  const row = document.createElement("article");
  row.className = `library-text ${doc.id === currentId ? "active" : ""}`;

  const open = document.createElement("button");
  open.className = "library-text-open";
  open.type = "button";
  open.title = [doc.title, doc.level, doc.topic].filter(Boolean).join(" · ");
  open.innerHTML = `
    ${buttonIcon("sr-file-text")}
    <span>
      <strong>${escapeHtml(doc.title)}</strong>
    </span>
  `;
  open.addEventListener("click", () => selectLibraryText(doc));
  row.appendChild(open);
  row.appendChild(createTextMenu(doc));
  return row;
}

function createFolderMenu(folder) {
  return createLibraryMenu([
    { icon: "sr-pencil", label: t("renameFolder"), action: () => openLibraryDialog("rename-folder", folder.id) },
    { icon: "sr-trash", label: t("deleteFolder"), action: () => deleteLibraryFolder(folder.id), danger: true }
  ]);
}

function createTextMenu(doc) {
  return createLibraryMenu([
    { icon: "sr-pencil", label: t("renameLibraryText"), action: () => openLibraryDialog("rename-text", doc.id) },
    { icon: "sr-move", label: t("moveLibraryText"), action: () => openLibraryDialog("move-text", doc.id) },
    { icon: "sr-trash", label: t("deleteText"), action: () => deleteLibraryText(doc.id), danger: true }
  ]);
}

function createLibraryMenu(actions) {
  const menu = document.createElement("details");
  menu.className = "library-menu";
  const summary = document.createElement("summary");
  summary.title = t("show");
  summary.setAttribute("aria-label", t("show"));
  summary.innerHTML = buttonIcon("sr-more");
  menu.appendChild(summary);
  const panel = document.createElement("div");
  panel.className = "library-menu-panel";
  actions.forEach((action) => {
    const button = document.createElement("button");
    button.className = action.danger ? "danger" : "";
    button.type = "button";
    button.innerHTML = `${buttonIcon(action.icon)}<span>${escapeHtml(action.label)}</span>`;
    button.addEventListener("click", () => {
      menu.open = false;
      action.action();
    });
    panel.appendChild(button);
  });
  menu.appendChild(panel);
  return menu;
}

function selectLibraryText(doc) {
  currentDocument = structuredClone(doc);
  persistCurrentDocument();
  renderTextOptions();
  render();
}

function upsertDocument(doc) {
  normalizeDocument(doc);
  doc.folderId = findUsableFolderId(doc.folderId) || defaultFolderIdForDoc(doc);
  const index = library.findIndex((item) => item.id === doc.id);
  if (index >= 0) library[index] = structuredClone(doc);
  else library.unshift(structuredClone(doc));
  saveLibraryState();
  renderTextOptions();
}

function deleteLibraryText(docId) {
  if (!library.some((doc) => doc.id === docId) || !confirm(t("deleteTextConfirm"))) return;
  library = library.filter((doc) => doc.id !== docId);
  if (currentDocument?.id === docId) currentDocument = library[0] ? structuredClone(library[0]) : null;
  saveLibraryState();
  persistCurrentDocument();
  renderTextOptions();
  render();
  setStatus(t("deleted"));
}

function deleteLibraryFolder(folderId) {
  const folder = libraryFolders.find((item) => item.id === folderId);
  if (!folder || !confirm(t("deleteFolderConfirm"))) return;
  libraryFolders = libraryFolders.filter((item) => item.id !== folderId);
  library.forEach((doc) => {
    if (doc.folderId === folderId) doc.folderId = "";
  });
  if (currentDocument?.folderId === folderId) currentDocument.folderId = "";
  saveLibraryState();
  renderTextOptions();
  setStatus(t("folderDeleted"));
}

function openLibraryDialog(mode, targetId = "") {
  libraryDialogState = { mode, targetId };
  const isMove = mode === "move-text";
  const folder = mode === "rename-folder" ? libraryFolders.find((item) => item.id === targetId) : null;
  const doc = mode === "rename-text" || isMove ? library.find((item) => item.id === targetId) : null;
  if ((mode === "rename-folder" && !folder) || ((mode === "rename-text" || isMove) && !doc)) return;
  const titleKeys = {
    "new-folder": "newFolder",
    "rename-folder": "renameFolder",
    "rename-text": "renameLibraryText",
    "move-text": "moveLibraryText"
  };
  els.libraryDialogTitle.textContent = t(titleKeys[mode]);
  els.libraryDialogNameField.hidden = isMove;
  els.libraryDialogFolderField.hidden = !isMove;
  els.libraryDialogLabel.textContent = t(mode.includes("folder") ? "folderName" : "textName");
  els.libraryDialogName.value = folder?.name || doc?.title || "";
  els.libraryDialogSubmit.textContent = isMove ? t("moveLibraryText") : t(mode === "new-folder" ? "newFolder" : "save");
  if (isMove) populateLibraryFolderSelect(doc.folderId || "");
  els.libraryDialog.showModal();
  if (!isMove) els.libraryDialogName.focus();
}

function populateLibraryFolderSelect(selectedId) {
  els.libraryDialogFolder.innerHTML = "";
  const unfiled = document.createElement("option");
  unfiled.value = "";
  unfiled.textContent = t("unfiled");
  if (!selectedId) unfiled.selected = true;
  els.libraryDialogFolder.appendChild(unfiled);
  libraryFolders.forEach((folder) => {
    const option = document.createElement("option");
    option.value = folder.id;
    option.textContent = folder.name;
    if (folder.id === selectedId) option.selected = true;
    els.libraryDialogFolder.appendChild(option);
  });
}

function submitLibraryDialog(event) {
  event.preventDefault();
  if (!libraryDialogState) return;
  const { mode, targetId } = libraryDialogState;
  const name = els.libraryDialogName.value.trim();
  if (mode !== "move-text" && !name) {
    els.libraryDialogName.focus();
    return;
  }
  if (mode === "new-folder") {
    libraryFolders.push({ id: createFolderId(), name });
    saveLibraryState();
    renderTextOptions();
    setStatus(t("folderAdded"));
  }
  if (mode === "rename-folder") renameLibraryFolder(targetId, name);
  if (mode === "rename-text") renameLibraryText(targetId, name);
  if (mode === "move-text") moveLibraryText(targetId, els.libraryDialogFolder.value);
  closeLibraryDialog();
}

function closeLibraryDialog() {
  libraryDialogState = null;
  if (els.libraryDialog.open) els.libraryDialog.close();
}

function renameLibraryFolder(folderId, name) {
  const folder = libraryFolders.find((item) => item.id === folderId);
  if (!folder) return;
  folder.name = name;
  saveLibraryState();
  renderTextOptions();
  setStatus(t("folderRenamed"));
}

function renameLibraryText(docId, name) {
  const doc = library.find((item) => item.id === docId);
  if (!doc) return;
  doc.title = name;
  if (currentDocument?.id === doc.id) currentDocument.title = name;
  saveLibraryState();
  renderTextOptions();
  render();
  setStatus(t("textRenamed"));
}

function moveLibraryText(docId, folderId) {
  const doc = library.find((item) => item.id === docId);
  if (!doc) return;
  doc.folderId = findUsableFolderId(folderId);
  if (currentDocument?.id === doc.id) currentDocument.folderId = doc.folderId;
  saveLibraryState();
  renderTextOptions();
  setStatus(t("textMoved"));
}

function createFolderId() {
  return `folder-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

async function copyAnki() {
  const cards = activeView === "reading" && currentDocument ? flashcards.filter((card) => card.textId === currentDocument.id) : flashcards;
  const tsv = buildAnkiTsv(cards);
  if (!tsv) return setStatus(t("noWords"));
  try {
    await navigator.clipboard.writeText(tsv);
    setStatus(t("copiedAnki"));
  } catch {
    setStatus("Clipboard unavailable");
  }
}

function downloadAnki() {
  const tsv = buildAnkiTsv(flashcards);
  if (!tsv) return setStatus(t("noWords"));
  const blob = new Blob([tsv], { type: "text/tab-separated-values;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `sync-reader-anki-${new Date().toISOString().slice(0, 10)}.tsv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  setStatus(t("downloaded"));
}

function resetLocalData() {
  if (!confirm(t("resetConfirm"))) return;
  Object.keys(localStorage)
    .filter((key) => key.startsWith("sync-reader-"))
    .forEach((key) => localStorage.removeItem(key));
  resetLibraryToBundledTexts();
  flashcards = [];
  wordHistory = [];
  activeView = "reading";
  renderTextOptions();
  render();
  renderFlashcards();
  renderHistory();
  renderStats();
  setView("reading");
  setStatus(t("resetDone"));
}

function buildAnkiTsv(cards) {
  return cards.map((card) => {
    const sourceSentence = card.sentence || findSentenceForCard(card);
    return [
      `${card.source} (${card.lang.toUpperCase()})`,
      [
        card.translation,
        sourceSentence ? `<b>${escapeHtml(t("sentence"))}:</b> ${escapeHtml(sourceSentence)}` : "",
        uniqueExplanations(card.note, card.formTip),
        card.sentenceNote
      ].filter(Boolean).join("<br><br>"),
      `sync-reader ${card.lang} ${card.textId}`
    ].map(tsvCell).join("\t");
  }).join("\n");
}

function findSentenceForToken(paragraph, token, side) {
  if (paragraph.sentences?.[token.sentenceIndex]) {
    return paragraph.sentences[token.sentenceIndex][side] || "";
  }
  const text = paragraph[side] || "";
  const phrase = token[side] || "";
  if (!text || !phrase) return "";
  const parts = side === "left" ? token.leftParts : token.rightParts;
  const index = [phrase, ...(parts || [])].map((part) => text.indexOf(part)).filter((item) => item >= 0).sort((a, b) => a - b)[0] ?? -1;
  if (index < 0) return text;
  const before = text.slice(0, index);
  const start = Math.max(before.lastIndexOf("."), before.lastIndexOf("!"), before.lastIndexOf("?")) + 1;
  const after = text.slice(index);
  const ends = [after.indexOf("."), after.indexOf("!"), after.indexOf("?")].filter((item) => item >= 0);
  const end = ends.length ? index + Math.min(...ends) + 1 : text.length;
  return text.slice(start, end).trim();
}

function normalizeDocument(doc) {
  const rawParagraphs = doc?.p || doc?.paragraphs;
  if (!doc || !Array.isArray(rawParagraphs)) throw new Error("Document must have a p array.");
  doc.id = doc.id || `doc-${Date.now()}`;
  doc.title = doc.title || "Untitled";
  doc.level = doc.level || "A2";
  doc.topic = doc.topic || "reading";
  doc.source = doc.source || "local";
  doc.paragraphs = rawParagraphs.map((paragraph, paragraphIndex) => normalizeParagraph(paragraph, paragraphIndex));
  return doc;
}

function normalizeParagraph(paragraph, paragraphIndex) {
  const fromArray = Array.isArray(paragraph);
  const id = fromArray ? paragraph[0] : paragraph.id;
  const rawSentences = textFormat.isSentenceParagraph(paragraph)
    ? (fromArray ? paragraph[1] : (paragraph.s || paragraph.sentences))
    : null;
  if (rawSentences) return normalizeSentenceParagraph(id, rawSentences, paragraphIndex);
  const left = fromArray ? paragraph[1] : (paragraph.ru || paragraph.left || "");
  const right = fromArray ? paragraph[2] : (paragraph.de || paragraph.right || "");
  const pairs = fromArray ? paragraph[3] : (paragraph.pairs || paragraph.a || []);
  const normalized = {
    id: id || `p${paragraphIndex + 1}`,
    left: String(left || ""),
    right: String(right || ""),
    pairs: Array.isArray(pairs) ? pairs : [],
    tokens: []
  };
  normalized.tokens = mergeGermanDeterminers(
    normalized.pairs.map((pair, pairIndex) => normalizePair(pair, normalized.id, pairIndex)).filter((token) => token.left && token.right),
    normalized.id
  );
  return normalized;
}

function normalizeSentenceParagraph(id, rawSentences, paragraphIndex) {
  const normalized = {
    id: id || `p${paragraphIndex + 1}`,
    left: "",
    right: "",
    pairs: [],
    sentences: [],
    tokens: []
  };
  rawSentences.forEach((rawSentence) => {
    const sentence = textFormat.getParagraphSentences(["sentence", [rawSentence]])[0];
    if (!sentence) return;
    normalized.sentences.push({
      left: sentence.left,
      right: sentence.right,
      pairs: sentence.pairs
    });
  });
  normalized.left = normalized.sentences.map((sentence) => sentence.left).join(" ");
  normalized.right = normalized.sentences.map((sentence) => sentence.right).join(" ");
  let pairIndex = 0;
  normalized.sentences.forEach((sentence, sentenceIndex) => {
    sentence.pairs.forEach((pair) => {
      normalized.pairs.push(pair);
      normalized.tokens.push(normalizePair(pair, normalized.id, pairIndex, sentenceIndex));
      pairIndex += 1;
    });
  });
  normalized.tokens = mergeGermanDeterminers(normalized.tokens.filter((token) => token.left && token.right), normalized.id);
  return normalized;
}

function normalizePair(pair, paragraphId, pairIndex, sentenceIndex = -1) {
  const fromArray = Array.isArray(pair);
  const rightValue = fromArray ? pair[0] : (pair.de || pair.right || "");
  const leftValue = fromArray ? pair[1] : (pair.ru || pair.left || "");
  const note = fromArray ? pair[2] : (pair.tip || pair.note || "");
  const formTip = fromArray ? pair[3] : (pair.formTip || "");
  const sentenceNote = fromArray ? pair[4] : (pair.sentenceTip || pair.sentenceNote || "");
  const rightParts = visibleParts(rightValue);
  const leftParts = visibleParts(leftValue);
  return {
    id: `${paragraphId}a${pairIndex + 1}`,
    left: leftParts.join(" "),
    right: rightParts.join(" "),
    leftParts,
    rightParts,
    note: note || "",
    formTip: formTip || "",
    sentenceNote: sentenceNote || "",
    sentenceIndex
  };
}

function visibleParts(value) {
  if (Array.isArray(value)) return value.flatMap(visibleParts).filter(Boolean);
  return value ? [String(value)] : [];
}

function mergeGermanDeterminers(tokens, paragraphId) {
  const merged = [];
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    const next = tokens[index + 1];
    if (next && token.sentenceIndex === next.sentenceIndex && isGermanDeterminer(token.right) && normalKey(token.left) === normalKey(next.left)) {
      merged.push({
        ...next,
        id: `${paragraphId}a${merged.length + 1}`,
        right: [...token.rightParts, ...next.rightParts].join(" "),
        rightParts: [...token.rightParts, ...next.rightParts],
        note: uniqueExplanations(token.note, next.note),
        formTip: uniqueExplanations(token.formTip, next.formTip),
        sentenceNote: uniqueExplanations(token.sentenceNote, next.sentenceNote)
      });
      index += 1;
    } else {
      merged.push({ ...token, id: `${paragraphId}a${merged.length + 1}` });
    }
  }
  return merged;
}

function isGermanDeterminer(value) {
  return /^(der|die|das|den|dem|des|ein|eine|einen|einem|einer|eines|kein|keine|keinen|keinem|keiner|keines|mein|meine|meinen|meinem|meiner|meines|dein|deine|deinen|deinem|deiner|deines|sein|seine|seinen|seinem|seiner|seines|ihr|ihre|ihren|ihrem|ihrer|ihres|dieser|diese|dieses|diesen|diesem|jeder|jede|jedes|jeden|jedem|welcher|welche|welches|welchen|welchem)$/i.test(String(value || "").trim());
}

function countTokens(side) {
  if (!currentDocument) return 0;
  return currentDocument.paragraphs.reduce((sum, paragraph) => sum + paragraph.tokens.filter((token) => token[side]).length, 0);
}

function findToken(tokenId) {
  if (!currentDocument) return null;
  for (const paragraph of currentDocument.paragraphs) {
    const token = paragraph.tokens.find((item) => item.id === tokenId);
    if (token) return token;
  }
  return null;
}

function findParagraphForToken(tokenId) {
  if (!currentDocument) return null;
  return currentDocument.paragraphs.find((paragraph) => paragraph.tokens.some((token) => token.id === tokenId));
}

function findSentenceForCard(card) {
  const doc = library.find((item) => item.id === card.textId);
  if (!doc) return "";
  const paragraph = doc.paragraphs.find((item) => item.tokens.some((token) => token.id === card.tokenId));
  if (!paragraph) return "";
  const token = paragraph.tokens.find((item) => item.id === card.tokenId);
  if (!token) return "";
  return findSentenceForToken(paragraph, token, card.lang === "ru" ? "left" : "right");
}

function isUnknown(tokenId, lang) {
  const token = findToken(tokenId);
  if (!token) return false;
  const side = lang === "ru" ? "left" : "right";
  return flashcards.some((card) => card.key === `${lang}:${normalKey(token[side])}`);
}

function loadLibrary() {
  const saved = loadJson(STORAGE.library, null);
  if (Array.isArray(saved)) {
    return saved.filter((doc) => doc.id !== "seed-c1-energy-news").map(normalizeDocument);
  }
  return structuredClone(seedTexts);
}

function loadLibraryFolders(docs) {
  const saved = loadJson(STORAGE.folders, null);
  const folders = Array.isArray(saved) ? saved.map(normalizeLibraryFolder).filter(Boolean) : defaultLibraryFolders();
  docs.forEach((doc) => {
    doc.folderId = findFolderIdIn(doc.folderId, folders) || defaultFolderIdForDoc(doc, folders);
  });
  return folders;
}

function normalizeLibraryFolder(folder, index) {
  if (!folder || !String(folder.name || "").trim()) return null;
  const id = String(folder.id || `folder-${index + 1}`);
  return {
    id,
    name: id === "wicos-neg" && String(folder.name).trim() === "Wicos Neg" ? "Wicos Neg A2" : String(folder.name).trim(),
    collapsed: !!folder.collapsed
  };
}

function defaultLibraryFolders() {
  return structuredClone(DEFAULT_LIBRARY_FOLDERS);
}

async function loadExternalTexts() {
  if (Array.isArray(loadJson(STORAGE.library, null))) {
    mergeBundledLibraryAdditions(loadScriptedTextBank());
    return;
  }
  const scriptedTexts = loadScriptedTextBank();
  if (scriptedTexts.length) {
    replaceLibraryWithExternalTexts(scriptedTexts);
    if (location.protocol === "file:") return;
  }
  const files = await discoverExternalTextFiles();
  if (!files.length) {
    setStatus("Text bank index was not found.");
    return;
  }
  const loaded = [];
  const failed = [];
  for (const file of files) {
    const data = await fetchTextJson(`${TEXT_FOLDER}/${file}`);
    if (!data) {
      failed.push(file);
      continue;
    }
    const docs = Array.isArray(data) ? data : [data];
    docs.forEach((doc) => {
      try {
        const normalized = normalizeDocument(structuredClone(doc));
        normalized.source = normalized.source || `${TEXT_FOLDER}/${file}`;
        loaded.push(normalized);
      } catch {
        failed.push(file);
      }
    });
  }
  if (!loaded.length) {
    setStatus("No text bank files could be loaded.");
    return;
  }
  replaceLibraryWithExternalTexts(loaded);
  if (failed.length) setStatus(`Skipped text files: ${failed.join(", ")}`);
}

function mergeBundledLibraryAdditions(docs) {
  const appliedIds = new Set(loadJson(STORAGE.bundledAdditions, []));
  let changed = false;
  docs.filter((doc) => BUNDLED_LIBRARY_ADDITION_IDS.has(doc.id)).forEach((doc) => {
    if (appliedIds.has(doc.id)) return;
    appliedIds.add(doc.id);
    if (library.some((saved) => saved.id === doc.id)) return;
    ensureLibraryFolder(doc.folderId);
    doc.folderId = defaultFolderIdForDoc(doc);
    library.push(doc);
    changed = true;
  });
  saveJson(STORAGE.bundledAdditions, [...appliedIds]);
  if (!changed) return;
  saveLibraryState();
  renderTextOptions();
  render();
}

function ensureLibraryFolder(folderId) {
  if (findFolderIdIn(folderId, libraryFolders)) return;
  const folder = DEFAULT_LIBRARY_FOLDERS.find((item) => item.id === folderId);
  if (folder) libraryFolders.push(structuredClone(folder));
}

function loadScriptedTextBank() {
  const texts = Array.isArray(window.SYNC_READER_TEXTS) ? window.SYNC_READER_TEXTS : [];
  const loaded = [];
  texts.forEach((doc) => {
    try {
      loaded.push(normalizeDocument(structuredClone(doc)));
    } catch {
      // Ignore malformed scripted text data; JSON import reports manual errors.
    }
  });
  return loaded;
}

async function discoverExternalTextFiles() {
  const manifest = await fetchTextJson(`${TEXT_FOLDER}/index.json`);
  if (Array.isArray(manifest)) return manifest.map((file) => String(file).trim()).filter(Boolean);
  return Array.from({ length: TEXT_FILE_LIMIT }, (_, index) => `${String(index + 1).padStart(3, "0")}.json`);
}

async function fetchTextJson(path) {
  try {
    const cacheBustedPath = location.protocol === "file:" ? path : `${path}${path.includes("?") ? "&" : "?"}v=${Date.now()}`;
    const response = await fetch(cacheBustedPath, { cache: "no-store" });
    if (!response.ok) return location.protocol === "file:" ? readLocalJsonViaFrame(path) : null;
    return await response.json();
  } catch {
    return location.protocol === "file:" ? readLocalJsonViaFrame(path) : null;
  }
}

function readLocalJsonViaFrame(path) {
  return new Promise((resolve) => {
    const frame = document.createElement("iframe");
    let finished = false;
    const finish = (value) => {
      if (finished) return;
      finished = true;
      frame.remove();
      resolve(value);
    };
    frame.hidden = true;
    frame.onload = () => {
      try {
        const text = frame.contentDocument?.body?.textContent || "";
        finish(JSON.parse(text));
      } catch {
        finish(null);
      }
    };
    frame.onerror = () => finish(null);
    window.setTimeout(() => finish(null), 1200);
    frame.src = path;
    document.body.appendChild(frame);
  });
}

function replaceLibraryWithExternalTexts(docs) {
  const savedId = localStorage.getItem(STORAGE.currentId);
  const currentId = currentDocument?.id;
  const deduped = [];
  docs.forEach((doc) => {
    const index = deduped.findIndex((item) => item.id === doc.id);
    if (index >= 0) deduped[index] = structuredClone(doc);
    else deduped.push(structuredClone(doc));
  });
  library = deduped;
  libraryFolders = defaultLibraryFolders();
  library.forEach((doc) => {
    doc.folderId = defaultFolderIdForDoc(doc);
  });
  const preferred = library.find((item) => item.id === currentId) || library.find((item) => item.id === savedId) || library[0];
  currentDocument = preferred ? structuredClone(preferred) : null;
  saveLibraryState();
  persistCurrentDocument();
  renderTextOptions();
  render();
}

function resetLibraryToBundledTexts() {
  const docs = loadScriptedTextBank();
  library = docs.length ? docs : structuredClone(seedTexts).map(normalizeDocument);
  libraryFolders = defaultLibraryFolders();
  library.forEach((doc) => {
    doc.folderId = defaultFolderIdForDoc(doc);
  });
  currentDocument = library[0] ? structuredClone(library[0]) : null;
  saveLibraryState();
  persistCurrentDocument();
}

function loadCurrentDocument() {
  const savedId = localStorage.getItem(STORAGE.currentId);
  const doc = library.find((item) => item.id === savedId) || library[0];
  return doc ? structuredClone(doc) : null;
}

function persistCurrentDocument() {
  if (!currentDocument) {
    localStorage.removeItem(STORAGE.currentId);
    return;
  }
  localStorage.setItem(STORAGE.currentId, currentDocument.id);
}

function loadJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  const savedValue = key === STORAGE.library ? value.map(compactDocumentForStorage) : value;
  localStorage.setItem(key, JSON.stringify(savedValue));
}

function saveLibraryState() {
  saveJson(STORAGE.library, library);
  saveJson(STORAGE.folders, libraryFolders);
}

function compactDocumentForStorage(doc) {
  return {
    id: doc.id,
    title: doc.title,
    level: doc.level,
    topic: doc.topic,
    source: doc.source,
    folderId: doc.folderId || "",
    hintLanguage: doc.hintLanguage || "ru",
    p: doc.paragraphs.map((paragraph) => paragraph.sentences?.length
      ? [paragraph.id, paragraph.sentences.map((sentence) => [sentence.left, sentence.right, sentence.pairs])]
      : [paragraph.id, paragraph.left, paragraph.right, paragraph.pairs])
  };
}

function defaultFolderIdForDoc(doc, folders = libraryFolders) {
  const savedFolderId = findFolderIdIn(doc.folderId, folders);
  if (savedFolderId) return savedFolderId;
  const folderId = LEVEL_FOLDER_IDS[String(doc.level || "").trim().toUpperCase()] || "";
  return findFolderIdIn(folderId, folders);
}

function findUsableFolderId(folderId) {
  return findFolderIdIn(folderId, libraryFolders);
}

function findFolderIdIn(folderId, folders) {
  return folders.some((folder) => folder.id === folderId) ? folderId : "";
}

function setStatus(message) {
  els.status.textContent = message;
}

function tsvCell(value) {
  return String(value || "").replace(/\t/g, " ").replace(/\r?\n/g, "<br>").trim();
}

function normalKey(value) {
  return String(value || "").toLocaleLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, "").replace(/\s+/g, " ").trim();
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = String(value || "");
  return div.innerHTML;
}

function cssEscape(value) {
  if (window.CSS && CSS.escape) return CSS.escape(value);
  return String(value).replace(/"/g, "\\\"");
}
