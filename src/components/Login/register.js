import {Link, useNavigate} from "react-router-dom";
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
                <NavigationSidebar active="register"/>
            </div>
            <div className="col-8"
                 style={{"position": "relative"}}>
                <div>

                    <section className="vh-100">
                        <div className="container py-5 h-100">
                            <div className="row d-flex align-items-center justify-content-center h-100">
                                <div className="col-md-8 col-lg-7 col-xl-6">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                        className="img-fluid" alt="Phone image"/>
                                </div>
                                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                    <form>
                                        <div className="form-outline mb-4">
                                            <h1>Register</h1>
                                            <input id="form1Example13"
                                                   value={user.username}
                                                   onChange={(e) => setUser({...user, username: e.target.value})}
                                                   placeholder="username"
                                                   className="form-control"/>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" id="form1Example23"
                                                   value={user.password}
                                                   onChange={(e) => setUser({...user, password: e.target.value})}
                                                   placeholder="password"
                                                   className="form-control"/>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="form1Example23"
                                                   onChange={(e) => setUser({...user, verifyPassword: e.target.value})}
                                                   placeholder="verify password"
                                                   className="form-control"/>

                                        {
                                            user && user.password !== user.verifyPassword &&
                                            <span>Passwords don't match</span>
                                        }
                                        </div>
                                        <div className="d-flex justify-content-around align-items-center mb-4">
                                            <button
                                                className="btn btn-primary"
                                                onClick={register}>
                                                Register
                                            </button>

                                            <Link to="/movieRatings/login">Already a user? Login</Link>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
            {/*<div className="col-2">*/}
            </div>
        </div>

    );
};
export default Register;