import React, {useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate} from "react-router-dom";
import AdminProfileScreen from "../AdminProfileScreen";


const ProfileSearchComponent = () => {

    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const searchProfile = () => {
        if (user === undefined || user === {}) {
            return;
        } else {
            fetch(`${API_URL}/users/name/${user.username}`)
                .then(res => res.json())
                .then(resJson => {
                    if (resJson["found"]) {
                        setUser(resJson["profile"]);
                    }
                }).catch(e => navigate('/movieRatings/searchProfiles'));
        }
    };

    const renderWelcome = () => {
        if (user.username !== undefined) {
            return <h1>Welcome to {`${(user.username)}`}'s profile.</h1>;
        }
    }

    const renderGenre = () => {
        if (user.favoriteGenre !== undefined) {
            return <h1>{`${user.username === undefined ? '' : user.username}`}'s Favorite Genre of movies are {`${(user.favoriteGenre)}`} movies.</h1>;
        }
    }

    const renderMovie = () => {
        if (user.favoriteMovie !== undefined) {
            return <h1>{`${user.username === undefined ? '' : user.username}`}'s Favorite Movie is {`${(user.favoriteMovie)}`}.</h1>;
        }
    }

    return(
        <>
            <br/>
            <div className="row mt-2">
                <div className="col-6">
                    <h1>Search Profiles: </h1>
                    <div className="row mt-2">
                        <div className="col-9">
                            <div className="form-outline mb-4">
                                <input
                                    onChange={(e) => setUser({...user, username: e.target.value})}
                                    placeholder="username"
                                    className="form-control"/>
                            </div>
                        </div>
                        <div className="col-3">
                            <button
                                className="btn btn-primary btn-details mt-3"
                                onClick={searchProfile}>
                                Search Profile
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                </div>
            </div>
            {renderWelcome()}
            <br/>
            {renderGenre()}
            <br/>
            {renderMovie()}
        </>
    )
}

export default ProfileSearchComponent;
