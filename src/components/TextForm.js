import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase!","success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text converted to lowercase!',"success")
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces removed!',"success")
  };
  const handleCopyClick = () => {
    let copyText = document.getElementById("textForAnalyze");
    copyText.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert('Text copied!',"success")
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert('Text cleared!',"success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="textForAnalyze"
            id="textForAnalyze"
            value={text}
            
            placeholder="Enter you text here"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode==='dark'?'black':'white',
              color:props.mode==='dark'?'white':'black',
            }}
            rows="8"
            cols="170"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear the Text
        </button>
      </div>
      <div className="container">
        <h1>Text Summary</h1>
        <p>Word Count = {text.trim() === "" ? 0 : text.split(" ").length}</p>
        <p>Character Count = {text.length}</p>
        <p>Sentence Count = {text.split(".").length}</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
      </div>
    </>
  );
}
