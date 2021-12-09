import React from "react";


const Banner = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-4 ">
                    <img src='/public/images/movieTicket.png'
                        className="rounded"
                    alt="broken link"/>
                </div>
                <div className="col-8 ">
                    <h1>Movie Ratings</h1>
                </div>
            </div>
        </>
    );
}
export default Banner;
