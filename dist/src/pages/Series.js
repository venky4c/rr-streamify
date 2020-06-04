import React from 'react'

const Series = () => {

    let filtered
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





    return (
        <div className='series'>
            <span>{data}</span>
        </div>
    )
}

export default Series