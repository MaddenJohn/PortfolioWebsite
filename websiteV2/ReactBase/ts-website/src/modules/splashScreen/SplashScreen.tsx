import React from "react";
import "./SplashScreen.scss";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
// import {greeting, splashScreen} from "../../portfolio";
// import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  return (
    <div className="dark-mode splash-container">
      {/* <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div> */}
      <div className="splash-title-container">
        <span className="splash-title">Jonathan Madden</span>
      </div>
    </div>
  );
}
