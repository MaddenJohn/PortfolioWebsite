import React from "react";
import Header from "../components/header/Header";
import Bio from "../components/bio/Bio";
import Intro from "../components/intro/Intro";
import "./Main.scss";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

const Main = () => {

    return (
        <div className="dark-mode">
            <>
                <Header />
                <Intro />
                <Bio />
                <Experience />
                <Projects />
            </>
        </div>

    );
}

export default Main;