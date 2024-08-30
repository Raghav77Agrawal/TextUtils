import React, { useState } from "react";
// import {
//   Route,
//   BrowserRouter as Router,
//   Routes
// } from "react-router-dom";
// import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {

  const [Mode, SetMode] = useState('light');
 
  const[alert,SetAlert] = useState(null);
  const showAlert = (message,type) =>{
    SetAlert(
      {
        msg:message,
      type:type
      }
    )
    setTimeout(() => {
      SetAlert(null);
    }, 2000);
  }
  const changeredcolor = () =>{
SetMode('danger');
showAlert(`Color changed to red`, 'danger');
document.body.style.backgroundColor = "rgb(101, 3, 3)";
document.title = "RamJi's App Red";
  }
  const changebluecolor = () =>{
    SetMode('info');
    showAlert(`Color changed to blue`, 'primary');
    document.body.style.backgroundColor = "rgb(2, 2, 36)";
    document.title = "RamJi's App Blue";
      }
      const changegreencolor = () =>{
        SetMode('success');
        showAlert(`Color changed to green`, 'success');
        document.body.style.backgroundColor = "rgb(2, 64, 2)";
        document.title = "RamJi's App Green";
          }
          const changedarkcolor = () =>{
            SetMode('dark');
            showAlert(`Color changed to dark`, 'dark');
            document.body.style.backgroundColor = "rgb(2, 2, 35)";
            document.title = "RamJi's App Dark";
          }
          const changelightcolor = () =>{
            SetMode('light');
            showAlert(`Color changed to light`, 'light');
            document.body.style.backgroundColor = "rgb(255,255,255)";
            document.title = "RamJi's App Light";
          }

 

  return (
    
     <div>
      
    <Navbar title = "Ramji" Mode = {Mode} changeredcolor = {changeredcolor} changebluecolor = {changebluecolor} changegreencolor = {changegreencolor}
    changedarkcolor = {changedarkcolor} changelightcolor  = {changelightcolor} ></Navbar>
    <Alert alert = {alert} />
<div className="container my-3">
        {/* <Routes>
          <Route path="/about" element = {<About/>}/>
            
          <Route path="/"
         element = {  */}
         <TextForm heading = "Enter the Text" Mode = {Mode}></TextForm>
    {/* //     // }
    //     //  />
    //     // </Routes>
    
    // // </Router> */}
       </div>
    
    
       </div>
  


  );
}

export default App;
