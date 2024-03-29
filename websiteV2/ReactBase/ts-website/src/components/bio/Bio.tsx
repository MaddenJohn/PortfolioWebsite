import React from "react";
import "./Bio.scss"
import {Fade} from "react-awesome-reveal";
import { SocialIcon } from 'react-social-icons';

function Bio() {

    var socialLinks = [ "https://www.linkedin.com/in/jmaddenlinked",
                        "https://github.com/MaddenJohn",
                        "mailto:madden.jonathanj@gmail.com" 
                    ]

    return (
        <Fade direction="left" duration={1000} triggerOnce={true}>
            <div className="bio-container" id="bio">
                <h1 className="bio-heading">About</h1>
                <div className="bio-main">
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
                                Experienced in AWS / Python / Java / React and other libraries
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
                    <a href="https://s3.amazonaws.com/maddenjonathan.com/resume-John-Madden.pdf">
                        <img className="bio-icon" alt="icon" src={require("../../assets/images/profile-icon.webp")}/>
                    </a>
                </div>
            </div>
        </Fade>
        
    );
}

export default Bio;