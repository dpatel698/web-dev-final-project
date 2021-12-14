import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ProfileSearchComponent from "./ProfileSearchComponent";


const SearchProfiles = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="searchProfiles"/>
                </div>
                <div className="col-10 "
                     style={{"position": "relative"}}>
                    <ProfileSearchComponent/>
                </div>
            </div>
        </>
    )
}

export default SearchProfiles;
