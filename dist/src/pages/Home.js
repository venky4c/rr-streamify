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
            <Link to='/movies'>Movies</Link><br/>
            <Link to='/series'>Series</Link>
            <Switch>
                <Route exact path="/series">
                    <Series/>
                </Route>                            
                <Route exact path="/movies">
                  <Movies/>
              </Route>
          </Switch>  

            
        </div>
    )
}

export default Home

    {/* <div>data: {JSON.stringify(data)}</div>
             */}  