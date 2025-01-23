import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("upper case was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        }
        
        const handleLoClick = () => {
            let newText = text.toLowerCase();
            setText(newText)
            }

            const handleClearClick = () => {
                let newText ="";
                setText(newText)
                }

            const handleCopy = () => {
                var text = document.getElementById("Mybox");
                text.select();
                navigator.clipboard.writeText(text.value);
            }

            const handleExtraSpaces = () => {
                let newText = text.split(/[ ]+/);
                setText(newText.join(""))
            }

            const handleSpeak = () => {
                let msg = new SpeechSynthesisUtterance();
                msg.text = text;
                window.speechSynthesis.speak(msg);
              }
            
        const handleOnChange = (event) => {
            console.log("on change");
            setText(event.target.value);
            }

    const[text,setText] =useState("");
    // text="new text"
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"  value={text} onChange={handleOnChange}  id="Mybox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn  btn-secondary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-warning mx-2 my-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-success mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra spaces </button>
            <button className="btn btn-info mx-2 my-1" onClick={handleSpeak}>Speak </button>
        </div>

       
        <div className="container my-3">
            <h1>Your text summary </h1>
            <p>{text.split("").length} words and {text.length} characters</p>
            <p>{0.008*text.split("").length} Minutes read </p>
        </div>
        
        <div className="container my-3">
        <h2>About Text Converter</h2>
        <p>
          The Text Converter is a simple and effective tool designed to help you
          manipulate and analyze your text. Whether you want to convert your text
          to uppercase, lowercase, count characters, or words, this application
          provides all the necessary features. With its user-friendly interface
          and quick functionality, Text Converter is your go-to solution for text
          formatting and analysis.
        </p>
      </div>
        </>

  )
}


