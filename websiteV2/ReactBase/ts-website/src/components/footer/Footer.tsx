import "./Footer.scss";
import {Fade} from "react-awesome-reveal";
import { SocialIcon } from 'react-social-icons';
import { ImProfile } from "react-icons/im";


export default function Footer() {
  var socialLinks = [ "https://www.linkedin.com/in/jmaddenlinked",
                      "https://github.com/MaddenJohn",
                      "mailto:madden.jonathanj@gmail.com" 
]

    return (
        <Fade direction="down" duration={1000} triggerOnce={true}>
          <div className="footer-div">
            <p className="dark-mode footer-text">
                Copyright © 2022 Jonathan Madden
            </p>
            <div className="footer-social-links">
                {socialLinks.map((url, _) => {
                            return (
                            <SocialIcon
                                url={url}
                                bgColor="#ffffff"
                                style={{ height: 35, width: 35 }}
                            />
                            );
                        })}
                <a href="https://s3.us-east-2.amazonaws.com/madden.john.wordpress/simply-static-1-1598649569/resume-John-Madden.pdf">
                    <ImProfile 
                        cursor= "pointer"
                        style= {{ height: "35px", width:"35px", color:"white"}}
                    />
                </a>
                
            </div>
          </div>
        </Fade>
      );
}
