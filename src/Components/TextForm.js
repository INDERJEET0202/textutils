import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }

    const handleDownClick = () => {
        setText(text.toLowerCase());
    }

    const handleInverseCaseClick = () => {
        let newText = reverseCase(text);
        setText(newText);
    }

    const handleClearText = (event) => {
        let newText = "";
        setText(newText);
    }

    const handleCopyText = (event) => {
        navigator.clipboard.writeText(text);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");


    function reverseCase(str) {
        return str.replace(/./g, c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
    }

    function preview(){
        if (text.length > 0){
            return (
                <>
                <h2>Preview</h2>
                <p>{text}</p>
                </>
            )
        }
        else{
            return (
                <>
                <h2>Nothing to Preview 🥹</h2>
                <p>.. Enter something in the textbox to preview it here.</p>
                </>
            )
        }
    }

  return (
    <>
        <div className="container">
            <h1 className='mx-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' placeholder='Enter Text here' value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upperCase</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to lowerCase</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleInverseCaseClick}>InverseCase</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>
        </div>
        <div className="container my-5">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            
            {preview()}

        </div>
    </>
  )
}
