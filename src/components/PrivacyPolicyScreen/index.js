import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PrivacyPolicyComponent from "./PrivacyPolicyComponent";


const PrivacyPolicyScreen = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="privacy"/>
                </div>
                <div className="col-10 "
                     style={{"position": "relative"}}>
                    <PrivacyPolicyComponent/>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicyScreen;
