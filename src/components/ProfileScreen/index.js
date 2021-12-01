import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import Banner from "../TitleBanner";
import NewReleases from "../NewReleases";


const ProfileScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-6"
                 style={{"position": "relative"}}>
                <h2>Profile information here</h2>
            </div>
            <div className="col-4">
            </div>
        </div>
    )
}

export default ProfileScreen;
