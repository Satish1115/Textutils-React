import React , {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upeercase","success")
  }

  const handleLoClick = () => {
    console.log("upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowerCase","success")
  }

  const handleClearText = () => {
    // console.log("upper case was clicked" + text);
    let newText = '';

    setText(newText)
  }

  const handleCopy = () => {
    console.log("I'm copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = (event) => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value)
  }

  const [text, setText] = useState("Enter the text");
  // setText("new text");
  return (
    <>

    <div className='container'  style={{backgroundColor: props.mode==='dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white' , color: props.mode==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
</div>
   <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
   <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to lowerCase </button>
   <button className='btn btn-primary mx-2' onClick={handleClearText}>clear text </button>
   <button className='btn btn-primary mx-2' onClick={handleCopy}>copy text </button>
   <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove text </button>
    </div>
    <div className="container my-3"></div>
    <h1>Your text somebody</h1>
    <p>{text.split(" ").length} words ,{text.length}</p>
    <p>{0.008*text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview"}</p>
    </>
  )
}
