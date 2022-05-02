import React, {useState} from "react";

export default function (props) {
    const handleUpClick = () => {
        //console.log("handle click called "+ text);
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleOnChange = (event) => {
        //console.log("on change called");
        setText(event.target.value);
    };

    const [text, setText] = useState('Enter text here');
    //setText(text.toUpperCase);
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text}>
                </textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</button>
        </div>
    );
}
