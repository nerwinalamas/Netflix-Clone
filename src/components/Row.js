import axios from '../data/axios';
import React, { useEffect, useState } from 'react'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLarge}) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <>
            <div className='row'>
                <h1>{title}</h1>
                <div className={`row-movies ${isLarge && "row-isLarge"}`}>
                    {movies.map((movie) => (
                        <img src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} key={movie.id}/>
                    ))}
                </div>
            
                
            </div>
        </>
    )
}

export default Row;