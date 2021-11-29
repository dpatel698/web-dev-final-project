import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active='home'
    }) => {
    return(
        <>
            <div className="list-group" >
                <Link to="/movieRater/home"
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
                <Link to="/movieRater/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fas fa-hashtag"></i>
                        </div>
                        <div className="col-10">
                            <div className="d-none d-xl-block">Explore</div >
                        </div>
                    </div>
                </Link>
                <a className="list-group-item" href="#">
                    <div className="row">
                        <div className="col-2">
                            <i className="fas fa-bell"></i>
                        </div>
                        <div className="col-10">
                            <div className="d-none d-xl-block">Notifications</div >
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
export default NavigationSidebar;
