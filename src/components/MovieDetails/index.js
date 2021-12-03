import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


const MovieDetails = () => {
    const params = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const findMovieDetailsByimdbID = () =>
        fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=c564e558`)
            .then(res => res.json())
            .then(movie => setMovieDetails(movie));
    useEffect(findMovieDetailsByimdbID, []);
    return(
        <>
            <h1>Details</h1>
            {JSON.stringify(movieDetails)}
        </>
    );
}
export default MovieDetails;
