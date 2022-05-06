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
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard", "success");
    };
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces removed", "success");
    };

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h1 className="mb-2">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text} 
                        style={{
                            backgroundColor: props.mode ==='light'?'white':'#13466e',
                            color: props.mode ==='dark'?'white':'#042743'
                        }}>
                    </textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseText}>Reverse text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy to clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    );
}
