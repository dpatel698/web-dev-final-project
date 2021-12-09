import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";


const SearchBar = () => {
    const params = useParams();
    const navigate = useNavigate();
    const movieTitle = params.searchTerm || 'batman'
    const [searchTerm, setSearchTerm] = useState(movieTitle);
    const [movies, setMovies] = useState([]);
    const findMovies = () => {
        navigate(`/${searchTerm}`, {replace: true})
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
            <div>
                {movies.map(movie =>
                    <ul key={movie.imdbID} className="mt-2">
                        <Link to={`/movieRatings/details/${movie.imdbID}`}>
                            <ul>
                                <img className="me-2" src={movie.Poster} height={75} />
                                {movie.Title}
                            </ul>
                        </Link>
                    </ul>
                )}
            </div>
        </>
    );
}
export default SearchBar;
