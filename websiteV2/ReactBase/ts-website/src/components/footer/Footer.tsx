import "./Footer.scss";
import {Fade} from "react-awesome-reveal";


export default function ExperienceCard() {
    return (
        <Fade direction="down" duration={1000} triggerOnce={true}>
          <div className="footer-div">
            <p className="dark-mode footer-text">
                Copyright © 2022 Jonathan Madden
            </p>
          </div>
        </Fade>
      );
}
