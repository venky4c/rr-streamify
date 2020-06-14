import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='homediv'>
                <div className='homediv__series'>
                    <div className='homediv__image'>
                    <a href="./list?type=series" target="_blank">
                        <img id='homediv__image--series'
                            src={require('../assets/images/series.png')} alt=''
                        />
                    </a>
                </div>
                    <div className='homediv__text'>
                        <Link className='seriesLink' exact to='./list?type=series'>
                                Popular Series
                        </Link>
                    </div>
                </div>
                <div className='homediv__movies'>
                    <div className='homediv__image'>
                        <a href='./list?type=movie' target='_blank'>
                            <img id='homediv__image--movies'
                                src={require('../assets/images/movies.png')} alt=''
                            />
                        </a>
                    </div>
                    <div className='homediv__text'>
                        <Link className='moviesLink' exact to='./list?type=movie'>
                                  Popular Movies
                        </Link>
                    </div>
                </div>
          </div>
        </div>
    )
}

export default Home

