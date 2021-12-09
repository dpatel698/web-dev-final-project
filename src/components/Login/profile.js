import React, {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate} from "react-router-dom";
import NavigationSidebar from "../NavigationSidebar";

const Profile = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            }).catch(e => navigate('/login'));
    }
    const logout = () => {
        fetch(`${API_URL}/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => navigate('/'));
    }
    useEffect(getProfile, [navigate]);
    return(
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