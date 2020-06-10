import React, { useState, useCallback, useEffect } from "react"
import { withRouter } from "react-router-dom"
import { getType } from "../services/utils"
import ListItem from "../components/ListItem"

const URL = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'

const getData = async (aboveYear, howMany, type) => {
  console.log(aboveYear, howMany, type)
  let response, results, programs;
  try {
        response = await fetch(URL)
        results = await response.json()
        programs = results.entries
        .filter((item) => item.releaseYear >= aboveYear && item.programType === type)
        .sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)) 
        console.log(`from getData in List.js ${type}`)        
        return programs      
  } catch (error) {
      console.error(error)
  }
}

const List = (props) => {
    const type = getType(props.location.search)
    const [data, setData] = useState([])
    const fetchMyAPI = useCallback(getData, [ type ])
    
    useEffect(() => {
        const pullData = async () => {
        const list = await fetchMyAPI(2010, 21, type)
        setData(list)
        }
        pullData()
}, [])

    return (
        <div className="contact-card">
        {
            data.map((program, index) => <ListItem key={index} data={program}></ListItem>)
        }
        </div>
    )
}

export default withRouter(List)
