import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleloClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handlecopy = ()=>{
        var text=document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }



    const handleOnChange = (event)=>{
        console.log("on Change");
        setText(event.target.value)
    }

    const [text, setText] = useState("");

  return (
   <>
   <div className="container" style={{Color: props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , Color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handlecopy}>Convert to Copycase</button>
</div>
<div className="container my-3" style={{Color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summery</h2>
    <p>{text.split(" ").length} Words and {text.length} Characters</p>
    <h2>Preview</h2>
<p>{text}</p>
</div>

   </>
  )
  }
