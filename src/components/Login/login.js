import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {API_URL} from "../../consts";
import NavigationSidebar from "../NavigationSidebar";

const Login = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const login = () => {
        fetch(`${API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(status => {
            navigate('/movieRatings/profile')
        });
    }

    return(
        <div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="login"/>
            </div>
            <div className="col-10"
                 style={{"position": "relative"}}>
                <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                                <div className="col-md-8 col-lg-7 col-xl-6">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                        className="img-fluid" alt="Phone image"/>
                                </div>
                                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                        <div>
                                            <div className="form-outline mb-4">
                                                <input id="form1Example13"
                                                       placeholder="User Name"
                                                       className="form-control form-control-lg" value={user.username}
                                                       onChange={(e) => setUser({...user, username: e.target.value})}/>
                                                <label className="form-label" htmlFor="form1Example13"></label>
                                            </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form1Example23"
                                                           placeholder="Password"
                                                           className="form-control form-control-lg" value={user.password}
                                                           onChange={(e) => setUser({...user, password: e.target.value})}/>
                                                    <label className="form-label" htmlFor="form1Example23"></label>
                                                </div>
                                            <div className="d-flex justify-content-around align-items-center mb-4">
                                                <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="form1Example3"
                                                    checked
                                                />
                                                    <h3><label className="form-check-label" htmlFor="form1Example3"> Remember me </label></h3>
                                            </div>
                                                <h3><Link to="/movieRatings/register">Forgot password?</Link></h3>
                                            </div>
                                            <button  className="btn btn-primary btn-lg btn-block " onClick={login}>Log in</button>
                                            <div className="divider d-flex align-items-center my-4">
                                                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                            </div>
                                            <div>
                                            <button className="btn btn-primary btn-lg btn-block facebook-color" role = "button">
                                                <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                                            </button>
                                            </div>
                                            <br/>
                                            <button className="btn btn-primary btn-lg btn-block twitter-color" role = "button">
                                                <i className="fab fa-twitter me-2"></i>Continue with Twitter
                                            </button>
                                        </div>
                                    </div>
                    </div>
                </div>
                </section>

            </div>
        </div>

    );
};
export default Login;