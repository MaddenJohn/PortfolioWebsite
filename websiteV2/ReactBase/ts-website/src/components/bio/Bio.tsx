import React from "react";
import "./Bio.scss"
import {Fade} from "react-awesome-reveal";
import { SocialIcon } from 'react-social-icons';
import { ImProfile } from "react-icons/im";

function Bio() {

    var socialLinks = [ "https://www.linkedin.com/in/jmaddenlinked",
                        "https://github.com/MaddenJohn",
                        "mailto:madden.jonathanj@gmail.com" 
                    ]

    return (
        <Fade direction="left" duration={1000} triggerOnce={true}>
            <div className="bio-main" id="bio">
                <div className="bio-sub-main">
                    <div className="bio-text-div">
                        <div>
                            {/* <h1 className="dark-mode bio-text">
                                Software Engineer
                            </h1> */}
                            <p className="dark-mode bio-text-p">
                            Passionate Full Stack Developer with a background in Cybersecurity.
                            </p>
                            <p className="dark-mode bio-text-p">
                            Experienced in Java / Python / AWS / React and other libraries
                            and frameworks. 
                            </p>
                        </div>
                    </div>
                    <div className="bio-image-div">
                        <img alt="background" src={require("../../assets/images/headshot.webp")}/>
                    </div>
                </div>
            </div>
            <div className="bio-social-links">
                {socialLinks.map((url, _) => {
                            return (
                            <SocialIcon
                                url={url}
                                bgColor="#ffffff"
                            />
                            );
                        })}
                <a href="https://s3.us-east-2.amazonaws.com/madden.john.wordpress/simply-static-1-1598649569/resume-John-Madden.pdf">
                    <img className="bio-icon" alt="icon" src={require("../../assets/images/profile-icon.webp")}/>
                </a>
            </div>
        </Fade>
    );
}

export default Bio;