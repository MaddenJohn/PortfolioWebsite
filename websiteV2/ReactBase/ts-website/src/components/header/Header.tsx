import React from "react";
import Headroom from "react-headroom";
import SeoHeader from "../seo/SeoHeader";
import "./Header.scss";


function Header() {

    return (
        <div>
          <SeoHeader/>
          <Headroom>
            <header className={"dark-menu header"}>
              <a href="/" className="logo">
                <span className="logo-name">Jonathan Madden</span>
              </a>
              <input className="menu-btn" type="checkbox" id="menu-btn" />
              <label
                className="menu-icon"
                htmlFor="menu-btn"
                style={{color: "white"}}
              >
                <span className={"navicon navicon-dark"}></span>
              </label>
              <ul className={"dark-menu menu"}>
                <li>
                  <a href="#intro">Home</a>
                </li>
                <li>
                  <a href="#bio">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#education">Education</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://s3.us-east-2.amazonaws.com/madden.john.wordpress/simply-static-1-1598649569/resume-John-Madden.pdf">Resume</a>
                </li>
              </ul>
            </header>
          </Headroom>
        </div>
      );
    }
    export default Header;