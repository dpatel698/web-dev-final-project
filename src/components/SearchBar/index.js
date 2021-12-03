import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const SearchBar = () => {
    const [movies, setMovies] = useState([])
    const findMovies = () =>
        fetch('https://www.omdbapi.com/?s=batman&apikey=c564e558')
            .then(res => res.json())
            .then(results => setMovies(results.Search))
    useEffect(findMovies, []);
    return(
        <>
            <div className="row mt-2">
                Search Bar goes Here
            </div>
            <br/>
            <ul>
                {movies.map(movie =>
                    <li key={movie.imdbID} className="mt-2">
                        <Link to={`/movieRatings/details/${movie.imdbID}`}>
                            <img src={movie.Poster} height={50}/>
                            {movie.Title}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    );
}
export default SearchBar;
