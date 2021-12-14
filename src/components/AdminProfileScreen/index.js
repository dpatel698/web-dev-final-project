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

    const updateUser = () => {
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
            <div className="row mt-2">
                <div className="col-6">
                    <h5>Find a profile to edit</h5>
                    <input
                        value={targetUser.username}
                        onChange={(e) => setTargetUser({...targetUser, username: e.target.value})}
                        placeholder="username"
                        className="form-control"/>
                    <br/>
                    <button
                        className="btn btn-primary mb-2"
                        onClick={searchProfile}>
                        Search Profile
                    </button>
                </div>
                <div className="col-6 mt-2">
                    <h5>Username to Edit: {`${targetUser.username === undefined ? '' : targetUser.username}`}</h5>
                    <h5>Current Password: {`${targetUser.password === undefined ? '' : targetUser.username}`}</h5>
                </div>
            </div>
            <br/>
            <div className="row mt-2">
                <div className="col-6">
                    <h5>New User Type: </h5>
                    <div className="row mt-2">
                        <div className="col-8">
                            <div className="form-outline mb-4">
                                <input id="passwordUpdate"
                                       value={targetUser.userLevel}
                                       onChange={(e) => setTargetUser({...targetUser, userLevel: e.target.value})}
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-4">
                            <button
                                className="btn btn-primary"
                                onClick={updateUser}>
                                Update Account
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h5>New Password: </h5>
                    <div className="row mt-2">
                        <div className="col-8">
                            <div className="form-outline mb-4">
                                <input id="passwordUpdate"
                                       value={targetUser.password}
                                       onChange={(e) => setTargetUser({...targetUser, password: e.target.value})}
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-4">
                            <button
                                className="btn btn-primary"
                                onClick={updateUser}>
                                Update Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminProfileScreen;
