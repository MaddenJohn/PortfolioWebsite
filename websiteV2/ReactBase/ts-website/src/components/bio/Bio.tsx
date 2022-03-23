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
                        I graduated from the University of Texas at Austin with a Bachelor of Science 
                        in Computer Science with honors in May 2018. After graduation, I then worked 
                        as a software engineer for Capital One. At Capital One, I had the privilege 
                        to work on the MFA and Barracuda WAF team, where I helped strengthen security 
                        to customers logging in to their credit card accounts. Key accomplishments 
                        there include a reduction in client integrations from 2 weeks to one hour 
                        and pipeline creation to secure production deployments. I then got married 
                        and moved to Austin, Texas, where I joined the Praetorian family. There, 
                        I led over 20 security engagements for high-tech companies and helped 
                        remediate over 300  vulnerabilities. My passions outside work include serving 
                        the church, rock climbing, country two-stepping, and personal projects to make 
                        life easier.
                        </p>
                    </div>
                </div>
                <div className="bio-image-div">
                    <img alt="background" src={require("../../assets/images/headshot.jpeg")}/>
                </div>
            </div>
        </div>
    );
}

export default Bio;