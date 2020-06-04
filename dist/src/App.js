import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
//import {BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import './assets/App.css'

const App = () => {
    return (
        <div className='container'>
            <div className='header'>
                <Header />
            </div>
            <div id='home'>
                <Home />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default App