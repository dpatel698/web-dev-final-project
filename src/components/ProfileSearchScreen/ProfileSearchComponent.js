import React, {useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate} from "react-router-dom";


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

    return(
        <>
            <h1>Search Profiles</h1>
            <input

                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
                className="form-control"/>
            <button
                className="btn btn-primary"
                onClick={searchProfile}>
                Search Profile
            </button>
            <div>

                <h1>User Name: {`${user.username === undefined ? '' : user.username}`}</h1>
                <h1>Favorite Genre: {`${user.favoriteGenre === undefined ? '' : user.favoriteGenre}`}</h1>
                <h1>Favorite Movie: {`${user.favoriteMovie === undefined ? '' : user.favoriteMovie}`}</h1>
            </div>
        </>
    )
}

export default ProfileSearchComponent;
