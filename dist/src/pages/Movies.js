import React, { useState,useEffect,useCallback,useLocation } from 'react'
const Movies = () => {
        
    const [data, setData] = useState([])
    
    const fetchMyAPI = useCallback(async (howMany) => {
    let imageUrl=''    
    const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
    let response, results, movies;
    try {
            response = await fetch(url)
            results = await response.json()              
            movies = results.entries.filter((item,i) => item.releaseYear >= 2010 && item.programType==='movie'&& i<3).sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)) 
            console.log(movies)
            imageUrl = movies.map(item => item['images']['Poster Art']['url'])
            console.log(imageUrl)
    } catch (error) {
        console.error(error)
    }
    
    setData(movies)
    }, [])
    
    useEffect( () => {
        fetchMyAPI()
    }, [fetchMyAPI]) 
    //console.log(data)
    
    return (        
          
    
        <div className='movies'>
           <div className='movies--card'>
              <h5 className='movies--title'>{data.map(item => item.title )}</h5> 
              <div className='movies--div--image'>
                  <img className='movies--image'
                    src={data.map(item => item['images']['Poster Art']['url'])} 
                    onError={(e)=>{e.target.onerror = null; e.target.src=require('../assets/na.png')}}/>
              </div>
            </div>               
        </div>
    )
}


export default Movies