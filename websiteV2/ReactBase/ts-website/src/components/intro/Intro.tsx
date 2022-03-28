import React from "react";
import "./Intro.scss"
import {Fade} from "react-awesome-reveal";
// import { styled } from '@mui/material/styles';
// import Button from 'react-bootstrap/Button'
// import Button, { ButtonProps } from '@mui/material/Button';
// import { grey } from '@mui/material/colors';


const Intro = () => {

    // const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    //     color: "white",
    //     backgroundColor: grey[900],
    //     '&:hover': {
    //       backgroundColor: grey[700],
    //     },
    //   }));

    return (
        <Fade direction="up" duration={1000} triggerOnce={true}>
            <div className="intro-main" id="intro">
                <div className="intro-image-div">
                    <img alt="background" src={require("../../assets/images/background.webp")}></img>
                </div>
                <div className="intro-text">
                    <div className = "intro-name-text">
                        Jonathan Madden
                    </div>
                    <div>
                        Software Engineer
                    </div>
                </div>
                <div className="resume-button">
                    {/* <Button variant="outline-dark">Resume</Button> */}
                    {/* <Button variant="outlined" color="info">Resume</Button> */}
                    {/* <ColorButton variant="contained">Resume</ColorButton> */}
                </div>
            </div>
        </Fade>
    );
}

export default Intro;