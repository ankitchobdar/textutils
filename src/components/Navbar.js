import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={"navbar navbar-expand-lg navbar-"+(props.mode === "dark" ? "dark": "light")} 
      style={{backgroundColor: () => { 
        if(props.mode === "light") 
          return "red";
        else if(props.mode === "dark")
          return "red";
        else
          return "red";
      }}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul>
          <select className="form-select mx-2" aria-label="Default select example" style={{width: 150}} onChange={props.selectMode} value={props.mode}>
            <option value="light" selected>Select Theme</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="green">Green</option>
          </select>
          {/* <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, 
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  about: 'About text here'
}