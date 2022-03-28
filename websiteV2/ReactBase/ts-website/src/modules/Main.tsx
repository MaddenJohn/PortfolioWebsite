import React from "react";
import Header from "../components/header/Header";
import Bio from "../components/bio/Bio";
import Intro from "../components/intro/Intro";
import "./Main.scss";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Education from "./education/Education";
import Footer from "../components/footer/Footer";

const Main = () => {

    return (
        <div className="dark-mode">
            <>
                <Header />
                <Intro />
                <Bio />
                <Experience />
                <Projects />
                <Education />
                <Footer />
            </>
        </div>

    );
}

export default Main;