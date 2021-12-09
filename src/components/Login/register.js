import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {API_URL} from "../../consts";
import NavigationSidebar from "../NavigationSidebar";

const Register = () => {
    const [user, setUser] = useState({username: 'alice', password: 'alice123'});
    const navigate = useNavigate();
    const register = () => { //should have it in a service javasscript file
        fetch(`${API_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(status =>
            navigate('/profile')
        );
    };
    return(

        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-8"
                 style={{"position": "relative"}}>
                <div>
                    <h1>Register</h1>
                    <input
                        value={user.username}
                        onChange={(e) => setUser({...user, username: e.target.value})}
                        placeholder="username"
                        className="form-control"/>
                    <input
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        placeholder="password"
                        type="password"
                        className="form-control"/>
                    <input
                        onChange={(e) => setUser({...user, verifyPassword: e.target.value})}
                        placeholder="verify password"
                        type="password"
                        className="form-control"/>
                    {
                        user && user.password !== user.verifyPassword &&
                        <span>Passwords don't match</span>
                    }
                    <br/>
                    <button
                        className="btn btn-primary"
                        onClick={register}>
                        Register
                    </button>
                </div>
            </div>
            <div className="col-2">
            </div>
        </div>

    );
};
export default Register;