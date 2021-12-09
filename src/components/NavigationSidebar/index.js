import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active='home'
    }) => {
    return(
        <>
            <div className="list-group ms-2" >
                <Link to={'/'}
                      className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fas fa-home"></i>
                        </div>
                        <div className="col-10">
                            <div className="d-none d-xl-block" >Home</div >
                        </div>
                    </div>
                </Link>
                <Link to={'/movieRatings/search'}
                      className={`list-group-item ${active === 'search' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fab fa-searchengin"></i>
                        </div>
                        <div className="col-10">
                            <div className="d-none d-xl-block">Search Movies</div >
                        </div>
                    </div>
                </Link>
                <Link to={'/movieRatings/register'}
                      className={`list-group-item ${active === 'register' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="col-10">
                            <div className="d-none d-xl-block">Register</div >
                        </div>
                    </div>
                </Link>
                <Link to={'/movieRatings/login'}
                      className={`list-group-item ${active === 'login' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="col-10">
                            <div className="d-none d-xl-block">Login</div >
                        </div>
                    </div>
                </Link>
                <Link to={'/movieRatings/profile'}
                      className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="col-10">
                            <div className="d-none d-xl-block">Profile</div >
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}
export default NavigationSidebar;
