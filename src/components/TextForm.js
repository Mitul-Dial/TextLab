import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [wordToCheck, setWordToCheck] = useState("");
  const [wordFrequency, setWordFrequency] = useState(null);
  const [extractedEmails, setExtractedEmails] = useState([]);
  const [extractedUrls, setExtractedUrls] = useState([]);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase!", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleClearClick = () => {
    setText("");
    setExtractedEmails([]);
    setExtractedUrls([]);
    setWordFrequency(null);
    setFindText("");
    setReplaceText("");
    setWordToCheck("");
    props.showAlert("Text cleared!", "success");
  };

  const handleSentenceCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, function (c) {
        return c.toUpperCase();
      });
    setText(newText);
    props.showAlert("Text converted to sentence case!", "success");
  };

  const handleFindReplace = () => {
    if (!findText) {
      props.showAlert("Please enter text to find!", "warning");
      return;
    }
    const regex = new RegExp(
      findText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "gi"
    );
    let newText = text.replace(regex, replaceText);
    setText(newText);
    props.showAlert(`Replaced "${findText}" with "${replaceText}"!`, "success");
  };

  const handleRemoveDuplicateLines = () => {
    let lines = text.split("\n");
    let uniqueLines = [...new Set(lines.map((line) => line.trim()))];
    let newText = uniqueLines.join("\n");
    setText(newText);
    props.showAlert("Duplicate lines removed!", "success");
  };

  const handleToBulletPoints = () => {
    let lines = text.split("\n").filter((line) => line.trim() !== "");
    let bulletText = lines.map((line) => `• ${line.trim()}`).join("\n");
    setText(bulletText);
    props.showAlert("Text converted to bullet points!", "success");
  };

  const handleExtractEmails = () => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const emails = text.match(emailRegex) || [];
    const uniqueEmails = [...new Set(emails)];
    setExtractedEmails(uniqueEmails);
    props.showAlert(`Found ${uniqueEmails.length} unique email(s)!`, "success");
  };

  const handleExtractUrls = () => {
    const urlRegex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
    const urls = text.match(urlRegex) || [];
    const uniqueUrls = [...new Set(urls)];
    setExtractedUrls(uniqueUrls);
    props.showAlert(`Found ${uniqueUrls.length} unique URL(s)!`, "success");
  };

  const handleWordFrequency = () => {
    if (!wordToCheck.trim()) {
      props.showAlert("Please enter a word to check frequency!", "warning");
      return;
    }

    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const searchWord = wordToCheck.toLowerCase().trim();
    const frequency = words.filter((word) => word === searchWord).length;

    setWordFrequency({
      word: wordToCheck,
      count: frequency,
      total: words.length,
    });
    props.showAlert("Word frequency calculated!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const getWordCount = () => {
    return text.trim() === ""
      ? 0
      : text.split(/\s+/).filter((word) => word.length > 0).length;
  };

  const getCharCount = () => text.length;
  const getCharCountNoSpaces = () => text.replace(/\s/g, "").length;
  const getSentenceCount = () =>
    text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0)
      .length;
  const getParagraphCount = () =>
    text.split(/\n\s*\n/).filter((para) => para.trim().length > 0).length;
  const getReadingTime = () => (0.008 * getWordCount()).toFixed(1);

  return (
    <div className="text-form">
      <div className="text-form-header">
        <h1 className="text-form-title">{props.heading}</h1>
        <p className="text-form-subtitle">{props.subtitle}</p>
      </div>

      <div className="textarea-container">
        <textarea
          className="main-textarea"
          value={text}
          placeholder="Start typing or paste your text here to begin analysis..."
          onChange={handleOnChange}
        />
      </div>

      <div className="button-section">
        <h3 className="section-title">
          <i className="fas fa-font"></i>
          Text Transformation
        </h3>
        <div className="button-group">
          <button
            disabled={text.length === 0}
            className="btn btn-primary"
            onClick={handleUpClick}
          >
            <i className="fas fa-arrow-up"></i>
            UPPERCASE
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary"
            onClick={handleLowClick}
          >
            <i className="fas fa-arrow-down"></i>
            lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary"
            onClick={handleSentenceCase}
          >
            <i className="fas fa-text-height"></i>
            Sentence case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-secondary"
            onClick={handleExtraSpace}
          >
            <i className="fas fa-compress-alt"></i>
            Remove Extra Spaces
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-secondary"
            onClick={handleToBulletPoints}
          >
            <i className="fas fa-list-ul"></i>
            To Bullet Points
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-secondary"
            onClick={handleRemoveDuplicateLines}
          >
            <i className="fas fa-clone"></i>
            Remove Duplicates
          </button>
        </div>
      </div>

      <div className="button-section">
        <h3 className="section-title">
          <i className="fas fa-tools"></i>
          Utilities
        </h3>
        <div className="button-group">
          <button
            disabled={text.length === 0}
            className="btn btn-info"
            onClick={handleCopyClick}
          >
            <i className="fas fa-copy"></i>
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-info"
            onClick={handleExtractEmails}
          >
            <i className="fas fa-envelope"></i>
            Extract Emails
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-info"
            onClick={handleExtractUrls}
          >
            <i className="fas fa-link"></i>
            Extract URLs
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-outline"
            onClick={handleClearClick}
          >
            <i className="fas fa-trash"></i>
            Clear All
          </button>
        </div>
      </div>

      <div className="tool-panel">
        <div className="tool-panel-header">
          <i className="tool-panel-icon fas fa-search"></i>
          <h4 className="tool-panel-title">Find & Replace</h4>
        </div>
        <div className="input-group">
          <div className="form-group">
            <label className="form-label">Find Text</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter text to find..."
              value={findText}
              onChange={(e) => setFindText(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Replace With</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter replacement text..."
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
            />
          </div>
          <button
            disabled={text.length === 0 || findText.length === 0}
            className="btn btn-warning"
            onClick={handleFindReplace}
          >
            <i className="fas fa-exchange-alt"></i>
            Replace All
          </button>
        </div>
      </div>

      <div className="tool-panel">
        <div className="tool-panel-header">
          <i className="tool-panel-icon fas fa-chart-bar"></i>
          <h4 className="tool-panel-title">Word Frequency Counter</h4>
        </div>
        <div className="input-group">
          <div className="form-group">
            <label className="form-label">Word to Check</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter word to analyze..."
              value={wordToCheck}
              onChange={(e) => setWordToCheck(e.target.value)}
            />
          </div>
          <button
            disabled={text.length === 0 || wordToCheck.trim().length === 0}
            className="btn btn-secondary"
            onClick={handleWordFrequency}
          >
            <i className="fas fa-calculator"></i>
            Calculate Frequency
          </button>
        </div>
        {wordFrequency && (
          <div className="frequency-result">
            <div className="frequency-word">"{wordFrequency.word}"</div>
            <div className="frequency-count">{wordFrequency.count}</div>
            <div>occurrences found</div>
          </div>
        )}
      </div>

      <div className="results-container">
        {extractedEmails.length > 0 && (
          <div className="result-card">
            <div className="result-header">
              <h4 className="result-title">
                <i className="fas fa-envelope"></i>
                Extracted Emails
              </h4>
              <div className="result-count">{extractedEmails.length}</div>
            </div>
            <ul className="result-list">
              {extractedEmails.map((email, index) => (
                <li key={index} className="result-item">
                  {email}
                </li>
              ))}
            </ul>
          </div>
        )}

        {extractedUrls.length > 0 && (
          <div className="result-card">
            <div className="result-header">
              <h4 className="result-title">
                <i className="fas fa-link"></i>
                Extracted URLs
              </h4>
              <div className="result-count">{extractedUrls.length}</div>
            </div>
            <ul className="result-list">
              {extractedUrls.map((url, index) => (
                <li key={index} className="result-item">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="result-link"
                  >
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">{getWordCount()}</span>
          <span className="stat-label">Words</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{getCharCount()}</span>
          <span className="stat-label">Characters</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{getCharCountNoSpaces()}</span>
          <span className="stat-label">Characters (no spaces)</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{getSentenceCount()}</span>
          <span className="stat-label">Sentences</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{getParagraphCount()}</span>
          <span className="stat-label">Paragraphs</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{getReadingTime()}</span>
          <span className="stat-label">Minutes to read</span>
        </div>
      </div>
    </div>
  );
}
