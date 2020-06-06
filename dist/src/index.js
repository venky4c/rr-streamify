import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
//import './assets/Styles.css'
import './assets/Main.css'
import './assets/Footer.css'
import './assets/Home.css'
import './assets/Series.css'
import './assets/Movies.css'




 
ReactDOM.render(<BrowserRouter>
  <Main/></BrowserRouter>, 
  document.getElementById("root")
);