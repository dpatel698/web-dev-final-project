import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {API_URL} from "../../consts";
import Review from "./review";

const selectProfile = (state) => state.profile;

const MovieDetails = () => {
    const params = useParams();
    const profile = useSelector(selectProfile)
    const [movieDetails, setMovieDetails] = useState({Actors: ''});
    const findMovieDetailsByimdbID = () =>
        fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=c564e558`)
            .then(res => res.json())
            .then(movie => setMovieDetails(movie));
    useEffect(findMovieDetailsByimdbID, []);
    let [review, setReview] = useState('');
    const reviewClickHandler = () => {
        if (Object.keys(profile).length !== 0) {
            fetch(`${API_URL}/reviews`, {
                method: 'POST',
                body: JSON.stringify({
                    newReview: review,
                    imdbId: movieDetails.imdbID,
                    profileId: profile._id,
                    profileName: profile.username
                }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(res => res.json())
        }
    }
    let [allReviews, setAllReviews] = useState([]);
    const getAllMovieReviews = () => {
        fetch(`${API_URL}/movies/reviews/${movieDetails.imdbID}`).then(res => res.json())
            .then(revs => setAllReviews(revs));
    }
    let [likes, setLikes] = useState(0);
    const getLikes = () => {
        fetch(`${API_URL}/movies/likes/${movieDetails.imdbID}`).then(res => res.json())
            .then(revs => setLikes(revs.length));
    }
    const refreshData = () =>{
        getAllMovieReviews();
        getLikes();
    }

    const likeClickHandler = () => {
        if (Object.keys(profile).length !== 0) {
            fetch(`${API_URL}/likes`, {
                method: 'POST',
                body: JSON.stringify({
                    imdbId: movieDetails.imdbID,
                    profileId: profile._id,
                    profileName: profile.username
                }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(res => {res.json()})
        }
    }
    return (
        <>
            <h1>Details</h1>
            <img src={movieDetails.Poster} height={100}/>
            <br/>
            <h2>{movieDetails.Title} ({movieDetails.Year}) {movieDetails.Rated}</h2>
            Directed by: {movieDetails.Director}
            <br/>
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
            <button onClick={refreshData} id="refreshBtn" type="button" className="btn btn-dark mt-2 mb-2">
                Refresh Info
            </button>
            <h3>Likes</h3>
            <div>
                  {likes}
            </div>
            <button onClick={likeClickHandler} id="likeBtn" type="button" className="btn btn-dark mt-2">
                Leave a Like
            </button>
            <div className="form-group">
                <textarea value={review}
                          onChange={(event) => setReview(event.target.value)}
                          className="form-control" id="reviewTextArea" rows="3"></textarea>
                <button onClick={reviewClickHandler} id="reviewBtn" type="button" className="btn btn-dark mt-2">
                    Submit Review
                </button>
            </div>
            <h2>Reviews</h2>

            <ul className="list-group">
                {
                    allReviews.map(review => <Review rev={review}/>)
                }
            </ul>


        </>
    );
}
export default MovieDetails;
