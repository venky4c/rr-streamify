import React from 'react'
import {NavLink, Route, BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home' 
import Footer from './components/Footer'
import Series from './pages/Series'
import Movies from './pages/Movies'

const Main = () => {
        return (
          <Router>
            <div>
                 <div className='header'><Header /></div>
                {/*<div className="content"><Home /></div>   */}
                {/* <ul id="navlink">
                    <li><NavLink to="/pages/home">Home</NavLink></li>
                    <li><NavLink to="/pages/series">Series</NavLink></li>
                    <li><NavLink to="/pages/movies">Movies</NavLink></li>
                </ul> */}
                <div className="content">
                    <Route path="/pages/home" component={Home}/>
                    <Route path="/pages/series" component={Series}/>
                    <Route path="/pages/movies" component={Movies}/>
                </div>
            
                <div className='footer'>
                      <Footer />
                </div>  
            </div>

          </Router>
        );     
    }

export default Main    