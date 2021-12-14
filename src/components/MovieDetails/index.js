import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {API_URL} from "../../consts";
import Review from "./review";

const selectProfile = (state) => state.profile;

const MovieDetails = () => {
    const [user, setUser] = useState({});
    const [localUser, setLocalUser] = useState({
        "profile":
            {
                "_id": "",
                "username": "",
                "password": "",
                "email": "",
                "firstName": "",
                "lastName": "",
                "favoriteMovie": "",
                "following": [], "": [],
                "userLevel": "",
                "favoriteGenre": ""
            },
        "found": true
    });
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
                console.log(user)
                dispatch({type: "update-profile", "profile": user})
            }).then(refreshProfile)
    }
    const refreshProfile = () => {
        fetch(`${API_URL}/users/name/${user.username}`)
            .then(res => res.json())
            .then(resJson => {
                if (resJson["found"]) {
                    setLocalUser(resJson);
                    console.log(localUser);
                }
            });
    }
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
            refreshData();
        } else {
            navigate('/movieRatings/login')
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
    const refreshData = () => {
        getProfile();
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
            }).then(res => {
                res.json()
            })
            refreshData();
        } else {
            navigate('/movieRatings/login')
        }

    }
    setTimeout(refreshData, 500);
    return (
        <>
            <h1>Details</h1>
            <img src={movieDetails.Poster} height={300}/>
            <br/>
            <h2 className="h2">{movieDetails.Title} ({movieDetails.Year}) {movieDetails.Rated}</h2>
            <p className="h4"> Directed by: {movieDetails.Director}</p>
            <br/>
            <hr/>
            <p className="h4">{movieDetails.Plot}</p>
            <h3 className="h3">Cast</h3>
            <ul className="h4">
                {
                    movieDetails.Actors.split(',').map(actor =>
                        <li key={actor}>
                            {actor}
                        </li>)
                }
            </ul>
            <h3>Likes</h3>
            <div className="h3">
                {likes}
            </div>
            <button onClick={likeClickHandler} id="likeBtn" type="button" className="btn btn-details  btn-dark mt-2">
                Leave a Like
            </button>
            <div className="form-group">
                <textarea value={review}
                          onChange={(event) => setReview(event.target.value)}
                          className="form-control" id="reviewTextArea" rows="3"></textarea>
                <button onClick={reviewClickHandler} id="reviewBtn" type="button" className="btn btn-details btn-dark mt-2">
                    Submit Review
                </button>
            </div>
            <h2 className="h2">Reviews</h2>

            {allReviews.map(review =>
                    <span className="card shadow p-3 bg-white mt-3">
    <span className="card-body">
        <p className="black-title h3">
             {/*<Review rev={review}/>*/}
            {review.review}
        </p>
        <br/>
        <p className="black-title h3">Written by {review.profileName}</p>
    </span>
</span>
            )}


        </>
    );
}
export default MovieDetails;
