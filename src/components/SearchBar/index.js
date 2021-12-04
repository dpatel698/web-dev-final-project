import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";


const SearchBar = () => {
    const params = useParams();
    const history = useHistory()
    const movieTitle = params.searchTerm || 'batman'
    const [searchTerm, setSearchTerm] = useState(movieTitle);
    const [movies, setMovies] = useState([]);
    const findMovies = () => {
        history.push(searchTerm)
        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=c564e558`)
            .then(res => res.json())
            .then(results => setMovies(results.Search))
    };
    useEffect(findMovies, []);
    return(
        <>
            <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}/>
            <button onClick={findMovies}>
                Search
            </button>
            {JSON.stringify(params)}
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
