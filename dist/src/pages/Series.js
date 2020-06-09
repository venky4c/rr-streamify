import React, { useState, useEffect, useCallback} from 'react'


const Series = (props) => {
  
    const [data, setData] = useState([])
    //console.log(`the value of properties ${this.props}`)
    const fetchMyAPI = useCallback(async () => {      
    let imageUrl=''    
    const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
    let response, results, series;
    try {
            response = await fetch(url)
            results = await response.json()              
            series = results.entries.filter((item,i) => item.releaseYear >= 2010 && item.programType==='series' && i<3).sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)) 
            console.log(`props.programType is >>>>>>>>>>> ${props.programType}`)
            imageUrl = series.map(item => item['images']['Poster Art']['url'])
            console.log(`imageUrl is >>>>>>>>>> ${imageUrl}`)
    } catch (error) {
        console.error(error)
    }
    
    setData(series)
    }, [props.programType])

    //https://www.javascriptstuff.com/react-image-gallery/
    
    useEffect( () => {      
        fetchMyAPI()
    }, [fetchMyAPI]) 
    //console.log(data)
    return (
        <div className='items'>
          <p style={{float: 'left',  width: '30%' }}>
            
          { data.map(item => item.title) } </p>
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


{/* <div className='seriesdiv'>
           <div className='seriesdiv__card'>
              <h5 className='series--title'>{data.map(item => item.title )}</h5>  
              <div className='seriesdiv__image'>
                <React.Fragment>
                  <img className='series--image'
                    src={data.map(item => item['images']['Poster Art']['url'])} 
                    onError={(e)=>{e.target.onerror = null; e.target.src=require('../assets/na.png')}}/> 
                  <p className='series--title'>{data.map(item => item.title )}</p>                      
                  </React.Fragment>
              </div>
            </div>               
        </div> */}
    