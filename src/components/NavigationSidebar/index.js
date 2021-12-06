import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active='home'
    }) => {
    return(
        <>
            <div className="list-group ms-2" >
                <Link to={'/movieRatings/home'}
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
                <Link to={'/movieRatings/search/term'}
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
