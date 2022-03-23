import React, {useEffect, useState} from "react";
import Headroom from "react-headroom";
import "./Header.css";


function Header() {
    var viewSkills = true;

    return (
        <Headroom>
          <header className={"header"}>
            <a href="/" className="logo">
              <span className="logo-name">Jonathan Madden</span>
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label
              className="menu-icon"
              htmlFor="menu-btn"
              style={{color: "white"}}
            >
              <span className={"navicon"}></span>
            </label>
            <ul className={"menu"}>
              {viewSkills && (
                <li>
                  <a href="#skills">Skills</a>
                </li>
              )}
            </ul>
          </header>
        </Headroom>
      );
    }
    export default Header;