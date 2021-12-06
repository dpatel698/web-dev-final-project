import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import MovieDetails from "../MovieDetails";


const DetailsScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-8"
                 style={{"position": "relative"}}>
                <MovieDetails/>
            </div>
            <div className="col-2">
            </div>
        </div>
    )
}

export default DetailsScreen;
