import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange  = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handleCopy = ()=>{
        console.log("I am copy")
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }
   const handleClearText = () => {
         let newText = ''
         setText(newText)
   }

    const [text, setText] = useState("");
    return (
        <>
           <div className="container" style={{color:props.mode==='#042743'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                    </div>
                    <button disabled={text.length===0}className="btn btn-primary my-3 mx-1 " onClick = {handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length===0}  className="btn btn-primary my-3 mx-1 " onClick = {handleLoClick}>Convert to Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary my-3 mx-1 " onClick = {handleCopy}>Copy Text</button>

                    <button disabled={text.length===0} className="btn btn-primary my-3 mx-1 " onClick = {handleClearText}>Clear Text</button>
                                                                                                        
                </div> 

        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element=>{return element.length!==0})).length} words and {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").filter((element=>{return element.length!==0})).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
        </div>
        </>
    )
}
