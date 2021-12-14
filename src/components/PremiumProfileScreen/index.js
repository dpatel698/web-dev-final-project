import React, {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";



const PremiumProfileScreen = (
    {
        localProfile =
            {
                "profile":
                {
                    "_id":"",
                    "username":"",
                    "password":"",
                    "email":"",
                    "firstName":"",
                    "lastName":"",
                    "favoriteMovie":"",
                    "following":[],"":[],
                    "userLevel":"",
                    "favoriteGenre":""
                },
                "found":true
            }
        }

    ) => {

    let [totalLikes, setTotalLikes] = useState([]);
    const getAllMovieLikes = () => {
        fetch(`${API_URL}/likes/${localProfile.profile._id}`).then(res => res.json())
            .then(revs => setTotalLikes(revs));
    }



    let likeCounter = totalLikes.length;
    useEffect(getAllMovieLikes, []);

    return(
        <>
            <h1>Congratulations! As a premium user you have liked {likeCounter} movies!</h1>
        </>
    )
}

export default PremiumProfileScreen;
