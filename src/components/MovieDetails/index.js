import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


const MovieDetails = () => {
    const params = useParams();
    const [movieDetails, setMovieDetails] = useState({Actors: ''});
    const findMovieDetailsByimdbID = () =>
        fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=c564e558`)
            .then(res => res.json())
            .then(movie => setMovieDetails(movie));
    useEffect(findMovieDetailsByimdbID, []);
    return(
        <>
            <h1>Details</h1>
            <img src={movieDetails.Poster} height={100}/>
            <br/>
            <h2>{movieDetails.Title} ({movieDetails.Year}) {movieDetails.Rated}</h2>
            Directed by: {movieDetails.Director}
            <hr/>
            <p>{movieDetails.Plot}</p>
            <h3>Cast</h3>
            <ul>
                {
                    movieDetails.Actors.split(',').map(actor =>
                    <li key={actor}>
                        {actor}
                    </li>)
                }
            </ul>

        </>
    );
}
export default MovieDetails;
