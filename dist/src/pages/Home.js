import React, {useState, useEffect, useCallback} from 'react'
import {Link,Switch, Route} from 'react-router-dom'
 import Movies from './Movies'
 import Series from './Series'


const Home = () => {
    
    const getData = async () => {
        const response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        return response.json()
      }
      const start = async (year, howMany) => {
        try {
          const data = await getData()
          const filtered = data.entries.filter((item => item.releaseYear >= year && item.programType==='series')).sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
          filtered.length = howMany
          console.log(filtered)
        } catch (error) {
          console.log(error)
        }
      }
      start(2010, 21)
    
    return (
        <div>              
          <Switch>
              <div className='home--div'>
                <div className='home--series'>
                    <Route exact path="/series">
                        <Series/>
                    </Route>
                    
                </div>
                    <Link exact to='./series'>Series</Link>
                <div className='home--movies'>
                    <Route exact path="/movies">
                        <Movies/>
                    </Route>            
                    <Link to='./movies'>Movies</Link><br/>
                </div>
              </div>                                            
          </Switch>             
        </div>
    )
}

export default Home

  