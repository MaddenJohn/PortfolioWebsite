import React from "react";
import "./Bio.scss"

function Bio() {

    return (
        <div className="bio-main" id="bio">
            <div className="bio-sub-main">
                <div className="bio-text-div">
                    <div>
                        {/* <h1 className="dark-mode bio-text">
                            Software Engineer
                        </h1> */}
                        <p className="dark-mode bio-text-p">
                        Passionate Full Stack Developer with a background in Cybersecurity.
                        Experienced in Java / Python / AWS / React and other libraries
                        and frameworks. See my resume for more information. 
                        </p>
                    </div>
                </div>
                <div className="bio-image-div">
                    <img alt="background" src={require("../../assets/images/headshot.webp")}/>
                </div>
            </div>
        </div>
    );
}

export default Bio;