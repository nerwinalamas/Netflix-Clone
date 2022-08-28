import React, { useEffect, useState } from 'react'
import axios from '../data/axios';
import requests from '../data/requests';

function Banner() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request =  await axios.get(requests.fetchNetflixOriginals)
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return requests;
        }
        fetchData();
    }, [])

    function shorten (str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div className='Banner-hero' 
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition: "center center",
            backgroundSize: "cover"
        }}>
            <div className='Banner-contents'>
                <h1>{movies?.name || movies?.title || movies?.original_name}</h1>
                <div className='Banner-button-container'>
                    <button className='Banner-button'>Play</button>
                    <button className='Banner-button'>Info</button>
                </div>
                <p className='Banner-overview'>
                    {shorten(movies?.overview, 300)}
                </p>

                <div className='Banner-fade'/>
                
            </div>
        </div>
    )
}

export default Banner;