import React from "react";
import NavigationSidebar from "../NavigationSidebar";


const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-6"
                 style={{"position": "relative"}}>

            </div>
            <div className="col-4">
            </div>
        </div>
    )
}

export default HomeScreen;
