import React, {useEffect, useState} from "react";
const Review = ({rev}) => {

    const [movies, setMovies] = useState([]);
    const findMovies = () => {
        fetch(`https://www.omdbapi.com/?i=${rev.imdbId}&apikey=c564e558`)
            .then(res => res.json())
            .then(results => {
                console.log(results)
                setMovies(results)
                console.log("movies" + movies.Title)
            }).catch(e => console.log("catched"))
    };


    useEffect(findMovies, []);


    return(<>
            <h1>
                {movies.Title}
            </h1>
        </>
    );
};

export default Review