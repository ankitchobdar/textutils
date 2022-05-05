import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light'); //Dark mode state
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1000);
  };

  // const toggleMode = () => {
  //   if(mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#042743';
  //     showAlert('Dark mode has been enabled', 'success');
  //   } else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert('Light mode has been enabled', 'success');
  //   }      
  // };

  const selectMode = (event) => {
    if(event.target.value === 'light') {
      console.log(event.target.value);
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    } else if(event.target.value === 'dark') {
      console.log(event.target.value);
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      console.log(event.target.value);
      setMode('light');
      document.body.style.backgroundColor = 'teel';
      showAlert('Green mode has been enabled', 'success');
    } 
  };

  return (
    //toggleMode={toggleMode}
    <>
      <Navbar title="TextUtils" about="About us" mode={mode}  selectMode={selectMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> 
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
