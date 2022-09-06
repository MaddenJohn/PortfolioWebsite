import "./Footer.scss";
import {Fade} from "react-awesome-reveal";
import { SocialIcon } from 'react-social-icons';


export default function Footer() {
  var socialLinks = [ "https://www.linkedin.com/in/jmaddenlinked",
  "https://github.com/MaddenJohn" 
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
                
            </div>
          </div>
        </Fade>
      );
}
