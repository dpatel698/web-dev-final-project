import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import Banner from "../TitleBanner";
import NewReleases from "../NewReleases";


const HomeScreen = () => {
    return(
        <div className="row mt-2">
            {/*<NavigationSidebar active="home"/>*/}
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-6"
                 style={{"position": "relative"}}>
                <Banner/>
                <NewReleases/>
            </div>
            <div className="col-4">
            </div>
        </div>
    )
}

export default HomeScreen;
