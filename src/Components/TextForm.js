
import React, { useState } from 'react';
export default function TextForm(props) {
    const [text , sett] = useState('');
    const handleonChange = (event)=>{
      console.log("change occuring");
      sett(event.target.value);
    }
    const handleonClick = ()=>{
      console.log("button clicked");
      let newtext = text.toUpperCase();
      sett(newtext);
      
    }
    const handleonClicke = ()=>{
      console.log("button clicked");
      let newtext = text.toLowerCase();
      sett(newtext);
      
    }
    const checker = (text) =>{
      if(text === ' ' || text===''){
        return 0;
      }
      else{
        return text.split(/\s+/).length * 0.008;
      }
    }
    const handleclearClick = () =>{
      sett('');
    }
    const handlebacksClick = () =>{
      let nt = text.slice(0,text.length-1);
      sett(nt);
    }
  return (<>
  <div className="container my-3">
    <h2 style = {{color:props.Mode==='light'?'black':'white'}}>{props.heading} </h2>
    
    <textarea className="form-control" value = {text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8" style = {{color:'black',backgroundColor:'white'}} ></textarea>
    <div className="container my-3">
    <button className="btn btn-primary mx-1" onClick={handleonClick} >Convert To UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleonClicke} >Convert To LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={handleclearClick} >ClearAll</button>
    <button className="btn btn-primary mx-1" onClick={handlebacksClick} >BackSpace</button>

    </div>
    
  </div>
   <div className="container my-2"  style = {{color:props.Mode==='light'?'black':'white'}} >
  <h2>Text Summary</h2>
  <p>{checker(text)/0.008} words and {text.length} characters</p>
  <p>Time to read {checker(text)} minutes</p>
  <h2>Preview</h2>
  <p>{text.length!==0?text:"Enter the text in textbox to preview"}</p>
  </div>
  </>
  )
}
