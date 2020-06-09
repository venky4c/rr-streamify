import React from "react"

function Program(props) {

    


    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.program.imgUrl}/>
            <h3>Title: {props.program.title}</h3>
            <p>ProgramType: {props.program.programType}</p>
            
        </div>
    )
}

export default Program