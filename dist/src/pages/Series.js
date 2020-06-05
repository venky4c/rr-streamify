import React, { useState, useEffect, useCallback} from 'react'


const Series = () => {
    const [data, setData] = useState([])
    

    const fetchMyAPI = useCallback(async (howMany) => {
    let imageUrl=''    
    const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
    let response, results, series;
    try {
            response = await fetch(url)
            results = await response.json()              
            series = results.entries.filter((item,i) => item.releaseYear >= 2010 && item.programType==='series'&& i<22).sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)) 
            console.log(series)
            imageUrl = series.map(item => item['images']['Poster Art']['url'])
            console.log(imageUrl)
    } catch (error) {
       // console.error(error)
    }
    
    setData(series)
    }, [])
    
    useEffect( () => {
        fetchMyAPI()
    }, [fetchMyAPI]) 
    //console.log(data)
    return (
        
        <div className='series'>
           <div id='card'>
              <h5>{data.map(item => item.title )}</h5> 
              <div><img src={data.map(item => item['images']['Poster Art']['url'])}/></div>
            </div>               
        </div>
    )
}

export default Series

/* let filtered
    let data
    const getData = async () => {
        const response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        return response.json()
      }
      const start = async (year, howMany) => {
        try {
           data = await getData()
           filtered = data.entries.filter((item => item.releaseYear >= year && item.programType==='series')).sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
          filtered.length = howMany
          console.log(filtered)
        } catch (error) {
          console.log(error)
        }
      }
      start(2010, 21)

 */



    