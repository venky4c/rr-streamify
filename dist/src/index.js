import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import './assets/Main.css'
import './assets/Header.css'
import './assets/Footer.css'
import './assets/Home.css'
import './assets/ListItem.css'

 
ReactDOM.render(<BrowserRouter>
      <Main/>
  </BrowserRouter>, document.getElementById("root")
);