import React  from 'react'
import { Link,Switch, Route,useLocation } from 'react-router-dom'
import Movies from './Movies'
import Series from './Series'
import Program from '../components/Program'

const Home = () => {
  /* const getData = async (year, homMany) => {
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
    start(2010, 21) */
  
  return (
      <div>              
        <Switch>
            <div className='homediv'>
              <div className='homediv__series'>
                  <div className='homediv__image'>
                      <img id='homediv__image--series'
                        src={require('../assets/series.jpg')} alt='Not available'                     
                          />
                  </div> 
                  <div className='homediv__text'>
                      <Route exact path="/series">
                          <Series programType='series'/>
                      </Route>
                      <Link exact to='./series' style={{ textDecoration: 'none', color: 'inherit'}}>Popular Series</Link>  
                  </div>                    
              </div>
              <div className='homediv__movies'>
              <div className='homediv__image'>
                      <img id='homediv__image--movies'
                        src={require('../assets/movies.jpg')} alt='Not available'                    
                          />
                  </div> 
                  <div className='homediv__text'>
                      <Route exact path="/movies">
                          <Movies programType='movies'/>
                      </Route>
                      <Link exact to='./movies'  style={{ textDecoration: 'none', color: 'inherit'}}>Popular Movies</Link>  
                  </div> 
              </div>
            </div>                                            
        </Switch>             
      </div>
  )
}

export default Home



/* const Home = () => {
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
            <div className='homediv'>
              <div className='homediv__movies'>
              <div className='homediv__image'>
                      <img id='homediv__image--movies'
                        src={require('../assets/movies.jpg')}                     
                          />
                  </div> 
                  <div className='homediv__text'>
                      <Route exact path="/movies">
                          <Program
                          entries={{ programType:'movies'
                                     title:   }}
                          />
                      </Route>
                      <Link exact to='./movies'  style={{ textDecoration: 'none', color: 'inherit'}}>Popular Movies</Link>  
                  </div> 
              </div>
            </div>                                            
        </Switch>             
      </div>
  )
}

export default Home */