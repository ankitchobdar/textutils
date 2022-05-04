import React, {useState} from "react";

export default function (props) {
    const handleUpClick = () => {
        //console.log("handle click called "+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };
    const handleLowClick = () => {
        //console.log("handle click called "+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };
    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    };
    const handleReverseText = () => {
        let reverse = '';
        for (let x =text.length-1; x >=0; x--) {
            reverse += text[x];
        }
        setText(reverse);
        props.showAlert("Text reversed", "success");
    };
    const handleOnChange = (event) => {
        //console.log("on change called");
        setText(event.target.value);
    };
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success");
    };
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces removed", "success");
    };

    const [text, setText] = useState('');
    //setText(text.toUpperCase);
    return (
        <>
            <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text} 
                        style={{
                            backgroundColor: props.mode ==='light'?'white':'grey',
                            color: props.mode ==='dark'?'white':'black'
                        }}>
                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleReverseText}>Reverse text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to clipboard</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Enter something in textbox above to preview here'}</p>
            </div>
        </>
    );
}
