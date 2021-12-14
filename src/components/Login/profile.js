import React, {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate, useParams} from "react-router-dom";
import NavigationSidebar from "../NavigationSidebar";
import {useDispatch} from "react-redux";
import AdminProfileScreen from "../AdminProfileScreen"
import profile from "../../reducers/data/profile";

const Profile = () => {

    const [user, setUser] = useState({});
    const [localUser, setLocalUser] = useState({
    "profile":
        {
            "_id":"",
            "username":"",
            "password":"",
            "email":"",
            "firstName":"",
            "lastName":"",
            "favoriteMovie":"",
            "following":[],"":[],
            "userLevel":"",
            "favoriteGenre":""
        },
        "found":true
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
            .catch(e => navigate('/login'));
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

    const logout = () => {
        fetch(`${API_URL}/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => {
            dispatch({type: "profile-logout"})
            navigate('/')
        });
    }

    const [movie, setMovie] = useState({
            "Title":"",
            "Year":"",
            "imdbID":"",
            "Type":"",
            "Poster":""}

        );

    const updateFavoriteMovie = () => {
        user.favoriteMovie = movie.Title;
        fetch(`${API_URL}/users2`, {
            method: 'PUT',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(
        );
    };

    const updateUser = () => {
        fetch(`${API_URL}/users2`, {
            method: 'PUT',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(
        );
    };



    const renderAdmin = () => {
        if (localUser.profile.userLevel) {
            return <AdminProfileScreen/>;
        }
    }

    const params = useParams();
    const movieTitle = params.searchTerm || 'batman'
    const [searchTerm, setSearchTerm] = useState(movieTitle);
    const [movies, setMovies] = useState([]);

    const findMoviesProfile = () =>
    {
        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=c564e558`)
            .then(res => res.json())
            .then(results => setMovies(results.Search))
    }

    useEffect(getProfile, [navigate]);
    useEffect(refreshProfile, [navigate]);
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-8"
                 style={{"position": "relative"}}>
                <div>
                    <div>
                        <div className="row mt-2">
                            <div className="col-10">
                                <h1>Username: {`${user.username} `}</h1>
                            </div>
                            <div className="col-2">
                                <button
                                    className="btn btn-success float-end"
                                    onClick={refreshProfile}>
                                    Refresh Profile
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-6">
                            <h3>Email: {`${localUser.profile.email === undefined ? '' : localUser.profile.email}`}</h3>
                            <div className="row mt-2">
                                <div className="col-9">
                                    <div className="form-outline mb-4">
                                        <input id="email"
                                               value={user.email}
                                               onChange={(e) => setUser({...user, email: e.target.value})}
                                               placeholder="Enter your Email Address"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <button
                                        className="btn btn-primary"
                                        onClick={updateUser}>
                                        Save Email
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h3>Account Type: {`${localUser.profile.userLevel === undefined ? 'basic' : localUser.profile.userLevel}`}</h3>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">
                            <h3>Favorite Movie: {`${localUser.profile.favoriteMovie}`}</h3>
                            <div className="row mt-2">
                                <div className="col-9">
                                    <div className="form-outline mb-4">
                                        <input id="favoriteMovie"
                                               value={user.favoriteMovie}
                                               onChange={(e) =>
                                                   setSearchTerm(e.target.value)} value={searchTerm}
                                               placeholder="Favorite Movie"
                                               className="form-control"/>
                                    </div>
                                    <ul className="border mb-2 rounded">
                                        {
                                            movies.map(movie =>
                                                <li key={movie.imdbID}>
                                                    <div className="row mt-2 mb-2">
                                                        <div className="col-7">
                                                            {movie.Title}
                                                        </div>
                                                        <div className="col-5">
                                                            <button
                                                                className="btn btn-primary"
                                                                onClick={(e) => setMovie({...movie, favoriteGenre: e.target.value})}>
                                                                Select Movie
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <button
                                        className="btn btn-primary"
                                        onClick={findMoviesProfile}>
                                        Search
                                    </button>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary"
                                onClick={updateFavoriteMovie}>
                                Save Movie
                            </button>
                        </div>
                        <div className="col-6">
                            <h3>Favorite Genre: {`${localUser.profile.favoriteGenre}`}</h3>
                            <div className="row mt-2">
                                <div className="col-9">
                                    <div className="form-outline mb-4">
                                        <input id="favoriteGenre"
                                               value={user.favoriteGenre}
                                               onChange={(e) => setUser({...user, favoriteGenre: e.target.value})}
                                               placeholder="Comedy"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <button
                                        className="btn btn-primary"
                                        onClick={updateUser}>
                                        Save Genre
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br/><br/>
                    <button
                        onClick={logout}
                        className="btn btn-danger">
                        Logout
                    </button>
                    <hr/>
                    {renderAdmin()}
                </div>
            </div>
            <div className="col-2">
            </div>
        </div>

    );
};
export default Profile;