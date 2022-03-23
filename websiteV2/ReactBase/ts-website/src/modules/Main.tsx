import React from "react";
import Header from "../components/header/Header";
import Bio from "../components/bio/Bio";
import Intro from "../components/intro/Intro";
import "./Main.scss";

const Main = () => {

    return (
        <div className="dark-mode">
            <Header />
            <Intro />
            <Bio />
        </div>

    );
}

export default Main;