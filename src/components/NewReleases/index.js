import React from "react";

const NewReleases = () => {

    return(
        <>
            <div className="row mt-2">
                <div className="col-4 ">
                    <img src='../../public/images/movieTicket.png'
                         className="rounded"
                         alt="Movie poster can go here"/>
                </div>
                <div className="col-8 ">
                    <h3>Movie Title</h3>
                    <p> Text for the movie down here</p>
                </div>
            </div>
        </>
    );
}
export default NewReleases;

// import React, {useEffect, useState} from "react";
// import {Link, useNavigate, useParams} from "react-router-dom";
// import {API_URL} from "../../consts";
// import profile from "../../reducers/data/profile";
// import {useDispatch} from "react-redux";
// import {get} from "mongoose";
//
// const NewReleases = () => {
//
//     // const params = useParams();
//     const navigate = useNavigate();
//     let movieTitle ;
//     const [user, setUser] = useState({});
//     const [searchTerm, setSearchTerm] = useState('');
//     const [movies, setMovies] = useState([]);
//     const dispatch = useDispatch()
//
//     const getProfile = () => {
//         fetch(`${API_URL}/profile`, {
//             method: 'POST',
//             credentials: 'include'
//         }).then(res => res.json())
//             .then(user => {
//                 setUser(user);
//                 setSearchTerm(user.favoriteMovie);
//                 movieTitle = user.favoriteMovie;
//                 // searchTerm = user.favoriteMovie;
//                 console.log(movieTitle)
//                 console.log(user)
//                 dispatch({type: "update-profile", "profile": user})
//             })
//             .then(findMovies);
//             // .catch(e => navigate('/login'));
//     }
//
//     // const refreshProfile = () => {
//     //     fetch(`${API_URL}/users/name/${user.username}`)
//     //         .then(res => res.json())
//     //         .then(resJson => {
//     //             if (resJson["found"]) {
//     //                 setUser(resJson);
//     //                 console.log("HomeScreen2" + user);
//     //             }
//     //         });
//     // }
//     useEffect(getProfile, [])
//     const findMovies = () => {
//         // getProfile();
//         console.log("searchTerm"+ searchTerm)
//         navigate(`/${searchTerm}`, {replace: true})
//         fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=c564e558`)
//             .then(res => res.json())
//             .then(results => setMovies(results.Search))
//     };
//
//     // useEffect(findMovies, []);
//     return(
//         <>
//             <div className="latest_movies_container">
//                 <div className="latest_movies_content">
//                     {/*{JSON.stringify(searchTerm)}*/}
//
//                     {movies.map(movie =>
//                         <div className="latest_movies">
//                             <div>
//                                 <Link to={`/movieRatings/details/${movie.imdbID}`}>
//                                     <div>
//                                         <img className="photo" src={movie.Poster} height={75} />
//                                         <div className="caption">
//                                             {movie.Title}
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     )}
//
//                 </div>
//             </div>
//         </>
//     );
// }
// export default NewReleases;

