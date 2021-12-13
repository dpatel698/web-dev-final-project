import React, {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate} from "react-router-dom";
import NavigationSidebar from "../NavigationSidebar";
import {useDispatch} from "react-redux";

const Profile = () => {

    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
                dispatch({type: "update-profile", "profile": user})
            }).catch(e => navigate('/login'));
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

    const updateFavoriteMovie = () => {
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


    const updateFavoriteGenre = () => {
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

    const searchProfile = () => {
        fetch(`${API_URL}/users/name/${user.username}`)
            .then(res => res.json())
            .then(resJson => {
                if (resJson["found"]) {
                    setUser(resJson["profile"]);
                }
            });
    };

    useEffect(getProfile, [navigate]);
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-8"
                 style={{"position": "relative"}}>
                <div>
                    <h1>Profile</h1>
                    <input
                        value={user.username}
                        onChange={(e) => setUser({...user, username: e.target.value})}
                        placeholder="username"
                        className="form-control"/>
                    <button
                        className="btn btn-primary"
                        onClick={searchProfile}>
                        Search Profile
                    </button>
                    <div className="form-outline mb-4">
                        <h1>Favorite Genre</h1>
                        <input id="favoriteGenre"
                               value={user.favoriteGenre}
                               onChange={(e) => setUser({...user, favoriteGenre: e.target.value})}
                               placeholder="Comedy"
                               className="form-control"/>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={updateFavoriteGenre}>
                        Save Genre
                    </button>
                    <div className="form-outline mb-4">
                        <h1>Favorite Movie</h1>
                        <input id="favoriteMovie"
                               value={user.favoriteMovie}
                               onChange={(e) => setUser({...user, favoriteMovie: e.target.value})}
                               placeholder="Avengers"
                               className="form-control"/>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={updateFavoriteMovie}>
                        Save Movie
                    </button>
                    {JSON.stringify(user)}
                    <br/>
                    <button
                        onClick={logout}
                        className="btn btn-danger">
                        Logout
                    </button>
                </div>
            </div>
            <div className="col-2">
            </div>
        </div>

    );
};
export default Profile;