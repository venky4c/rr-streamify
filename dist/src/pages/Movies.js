import React, { useState,useEffect } from 'react'

const Movies = () => {
    const [allTitles, setAllTitles] = useState([])
    
    const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'  

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllTitles(data))
    }, [])

    return (
        <div className='movies'>
            <span>{allTitles.entries.title}</span>
        </div>
    )
}

export default Movies