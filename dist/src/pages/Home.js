import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='homediv'>
                <div className='homediv__series'>
                    <div className='homediv__image'>
                        <img id='homediv__image--series'
                            src={require('../assets/series.jpg')} alt=''
                        />
                    </div>
                    <div className='homediv__text'>
                        <Link exact to='./list?type=series' 
                              style={{ textDecoration: 'none', color: 'inherit' }}>
                                Popular Series
                        </Link>
                    </div>
                </div>
                <div className='homediv__movies'>
                    <div className='homediv__image'>
                        <img id='homediv__image--movies'
                            src={require('../assets/movies.jpg')} alt=''
                        />
                    </div>
                    <div className='homediv__text'>
                        <Link exact to='./list?type=movies' 
                              style={{ textDecoration: 'none', color: 'inherit' }}>
                                  Popular Movies
                        </Link>
                    </div>
                </div>
          </div>
        </div>
    )
}

export default Home

