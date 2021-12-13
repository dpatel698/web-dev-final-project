import React, {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";



const AdminProfileScreen = () => {

    const [targetUser, setTargetUser] = useState({
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
    const searchProfile = () => {
        fetch(`${API_URL}/users/name/${targetUser.username}`)
            .then(res => res.json())
            .then(resJson => {
                if (resJson["found"]) {
                    setTargetUser(resJson["profile"]);
                }
            });
    };

    const updatePassword = () => {
        fetch(`${API_URL}/users2`, {
            method: 'PUT',
            body: JSON.stringify(targetUser),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(
        );
    };


    return(
        <>
            <h1>Find a profile to edit</h1>
            <input
                value={targetUser.username}
                onChange={(e) => setTargetUser({...targetUser, username: e.target.value})}
                placeholder="username"
                className="form-control"/>
            <br/>
            <button
                className="btn btn-primary"
                onClick={searchProfile}>
                Search Profile
            </button>
            <br/>
            <h5>Username to edit: {`${targetUser.username}`}</h5>
            <h5>Current Password: {`${targetUser.password}`}</h5>
            <h5>New Password: </h5>
            <div className="form-outline mb-4">
                <input id="passwordUpdate"
                       value={targetUser.password}
                       onChange={(e) => setTargetUser({...targetUser, password: e.target.value})}
                       className="form-control"/>
            </div>
            <button
                className="btn btn-primary"
                onClick={updatePassword}>
                Update Password
            </button>
        </>

    )
}

export default AdminProfileScreen;
