import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {API_URL} from "../../consts";
import Review from "./review";

const selectProfile = (state) => state.profile;

const Banner = () => {
    const [user, setUser] = useState({});
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
                console.log(user)
                dispatch({type: "update-profile", "profile": user})
            }).then(findMovies)
            .catch(e => console.log(e.log))
    }
    const findMovies = () => {
        fetch(`https://www.omdbapi.com/?s=${user.favoriteMovie}&apikey=c564e558`)
            .then(res => res.json())
            .then(results => setMovies(results.Search))
    };
    useEffect(getProfile, []);



    const profile = useSelector(selectProfile)

    let [allReviews, setAllReviews] = useState([]);
    const getAllMovieReviews = () => {
        fetch(`${API_URL}/profiles/${profile._id}`).then(res => res.json())
            .then(revs => setAllReviews(revs))
            .catch(e => console.log(e.log));
    }
    useEffect(getAllMovieReviews);


    return(
        <>
            {JSON.stringify(user.favoriteMovie)}
            <div className="container">
                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="2000">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                    </ol>

                    <div className="carousel-inner" >
                        <div className="item active">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/mqqft2x_Aa4"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <div className="carousel-caption">
                                <h3>Batman</h3>
                            </div>
                        </div>

                        <div className="item">

                            <iframe width="560" height="315" src="https://www.youtube.com/embed/6ZfuNTqbHE8"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <div className="carousel-caption">
                                <h3>Avengers : Infinity War</h3>
                            </div>
                        </div>

                        <div className="item">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/wmiIUN-7qhE"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <div className="carousel-caption">
                                <h3>Toy Story 4</h3>
                            </div>
                        </div>

                        <div className="item">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/yRUAzGQ3nSY"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <div className="carousel-caption">
                                <h3>Inside Out</h3>
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>



            <div className="main_body container-fluid">
                <div className="trailer_container row">
                    <div className="trailer_header">
                        <h1>Reviews</h1>
                        { allReviews.map(review =>

                                <span className="card shadow p-3 bg-white mt-3">
                <span className="card-body">
                    <p className="black-title h3">
                         <Review rev={review}/>
                        {review.review}
                    </p>
                    <br/>
                    <p className="black-title h4">Written by {review.profileName}</p>
                </span>
            </span>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}
export default Banner;
