import React from "react";
const Review = ({rev}) => {
    return(
        <li className="list-group-item">
            <div>Reviewer Name: {rev.profileName}</div>
            <div>Review: {rev.review}</div>
        </li>
    );
};

export default Review