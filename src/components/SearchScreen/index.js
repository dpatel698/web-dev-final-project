import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import SearchBar from "../SearchBar";


const SearchMovies = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="search"/>
                </div>
                <div className="col-10 "
                      style={{"position": "relative"}}>
                    <SearchBar/>
                </div>
                {/*<div className="col-4">*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default SearchMovies;
