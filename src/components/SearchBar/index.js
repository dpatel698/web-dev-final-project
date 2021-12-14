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
            <div className="input-group">
                <div className="form-group">
                    <input className="form-control" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}/>
                </div>
                <button type="button" className="btn btn-primary btn-search" onClick={findMovies}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <br/>
            <div className="latest_movies_container">
            <div className="latest_movies_content">

                {movies.map(movie =>
                    <div className="latest_movies">
                <div>
                        <Link to={`/movieRatings/details/${movie.imdbID}`}>
                            <div>
                                <img className="photo" src={movie.Poster} height={75} />
                                <div className="caption">
                                {movie.Title}
                                </div>
                            </div>
                        </Link>
                </div>
                    </div>
                )}

            </div>
            </div>
        </>
    );
}
export default SearchBar;
