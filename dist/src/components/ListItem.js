import React from "react"
import '../assets/ListItem.css'

const ListItem = ({data}) => {
    const url = data.images['Poster Art']['url']
    const title = data.title
    const type = data.programType
    return (
        <div className='listdiv'>
            <img className='listdiv__image' src={url} 
                onError={(e)=>{e.target.onerror = null; e.target.src=require('../assets/na.png')}}
                alt=''/><br/>
            <p className='listdiv__title'>Title: {title}</p>            
        </div>
    )
}

export default ListItem