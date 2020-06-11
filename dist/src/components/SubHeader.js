import React from 'react'
import { withRouter } from "react-router-dom";
import { getType } from '../services/utils';

const getTitle = (location) => {
    const type = getType(location.search)
    let title = ''
    switch (type) {
        case 'series':
            title = 'Popular Series';
            break;
        case 'movie':
            title = 'Popular Movies'
            break;
        default:
            title = 'Popular Titles'
            break;
    }
    return title;
}

const SubHeader = (props) => {
    return (
        <div className='subheader__div'>
            {getTitle(props.location)} 
        </div>
    )
}

export default withRouter(SubHeader)