import React, { useState } from 'react'

export default function Form(props) {

    const HandlerUpFn = () => {
        let newText = text.toUpperCase()
        setText(newText) 
        props.showAlert("Text converted to upper case","success");
    };
    const HandlerLowFn = () => {
        let newText = text.toLowerCase()
        setText(newText) 
        props.showAlert("Text converted to lower case","success");
    };
    const HandlerClearFn = () => {
        let newText = text
        newText = ""
        setText(newText) 
        props.showAlert("Text cleared","danger");
    };
    const HandlerTextFn = (event) => {
         setText(event.target.value);
    };

    const HandlerItalicFn = () => {
        setItalic(!italic);
        props.showAlert("Text converted to italic style","success");
   };
   const HandlerUnderlineFn = () => {
    setUnderline(!underline);
    props.showAlert("Text converted to underline style","success");
};

   const HandlerBoldFn = () => {
    setBold(!bold);
    props.showAlert("Text converted to bold style","success");
};

    const HandlerCopyToClipBoardFn = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success");  
   };

   const HandlerRemoveSpaceFn = () => {
    let removeSPace = text.split(/[ ]+/);
    setText(removeSPace.join(" "));
    props.showAlert("Extra spaces has been removed","success");
}
 
    const [text, setText] = useState('');   
    const [italic, setItalic] = useState('');
    const [bold, setBold] = useState(''); 
    const [underline, setUnderline] = useState('');
     
    return (
        < >
        <div   > 
                <div className="container my-3 form-group">
                    <h3>{props.heading}</h3>
                    <textarea value={text} onChange={HandlerTextFn}  id="myBox" rows="8" style={{ fontStyle: italic ? 'italic' : 'normal', fontWeight: bold ? 'bold' : 'normal',textDecoration: underline ? 'underline' : 'none' }} className="form-control" autoFocus={true} ></textarea>
                    <button type="button"  onClick={HandlerUpFn} className={`btn btn-primary my-3 mx-1 btn btn-${props.color === 'light' ? 'primary' : props.color}`}>Upper Case</button>
                    <button type="button" onClick={HandlerLowFn} className={`btn btn-primary my-3 mx-1 btn btn-${props.color === 'light' ? 'primary' : props.color}`}>Lower Text</button>
                    <button type="button" onClick={HandlerClearFn} className={`btn btn-primary my-3 mx-1 btn btn-${props.color === 'light' ? 'primary' : props.color}`}>Clear Text</button>
                    <button type="button" onClick={HandlerCopyToClipBoardFn} className={`btn btn-primary mx-1 my-3 btn btn-${props.color === 'light' ? 'primary' : props.color}`}>Copy to Clipboard</button>
                    <button type="button" onClick={HandlerItalicFn} className={`btn btn-primary my-3 btn mx-1 btn-${props.color === 'light' ? 'primary' : props.color}`}>Italic</button>
                    <button type="button" onClick={HandlerBoldFn} className={`btn btn-primary my-3 mx-1 btn btn-${props.color === 'light' ? 'primary' : props.color}`}>Bold</button>
                    <button type="button" onClick={HandlerUnderlineFn} className={`btn btn-primary my-3 mx-1 btn btn-${props.color === 'light' ? 'primary' : props.color}`}>Underline</button>
                    <button type="button" onClick={HandlerRemoveSpaceFn} className={`btn btn-primary my-3 mx-1 btn btn-${props.color === 'light' ? 'primary' : props.color}`}>Remove Spaces</button>
                    {/* <button type="button" onClick={HandlerDarkModeFn} className={`my-3 btn btn-${props.color === 'light' ? 'primary' : props.color}`}> {toggleBtn}  </button> */}
              
                 <h3>Summary</h3>
                <p>Letter are: {text.length} and Words are:{text.length ===0 ? text.split(" ").length-1 : text.split(" ").length }</p>
                <h3>Preview Text</h3>
                <p>{ text.length  >0? text: "Enter any Text To Preview"}</p>
                </div> 
        </div>
        </>
    )
} 
