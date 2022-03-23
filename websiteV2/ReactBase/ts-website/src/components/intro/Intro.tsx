import React from "react";
import "./Intro.scss"


const Intro = () => {

    return (
        <div className="intro-main">
            <div className="intro-image-div">
                <img alt="background" src={require("../../assets/images/background.jpeg")}></img>
            </div>
        </div>

    );
}

export default Intro;