import React from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import "./Projects.scss";
import {Fade} from "react-awesome-reveal";

export default function Project() {
    const projects = [
        {
            title: "Personal Website",
            description: "This personal website has been created to showcase my skills and experience as a full stack engineer.",
            descBullets: [  "React website with a component based design to allow for easy modification",
                            "Static website hosted on Azure, using AWS DNS resolution",
                            "Automated deployments through Gitlab"
            ],
            projectLogo: require("../../assets/images/favicon.webp"),
            projectUrl: "https://github.com/MaddenJohn/PortfolioWebsite/tree/master/websiteV2/ReactBase/ts-website"
        },
        {
            title: "Novel Audio Reader",
            description: "The Novel Audio Reader is a website that allows the creation of audio files for public online novels. I accomplished this by using AWS, and I was able to minimize cost and effort for users through the architecture design below. See the github link below to see the website and architecture diagram.",
            descBullets: [  "Simple user interface to access or update content",
                            "One-click updates for new content published to online novels",
                            "Serverless architecture using AWS Lambda and S3"
            ],
            projectLogo: require("../../assets/images/books.webp"),
            projectUrl: "https://github.com/MaddenJohn/LNAudioBooks"
        },
        {
            title: "MacAttack",
            description: "MacAttack is a Windows and Linux based tool that discovers local Mac addresses near a user’s machine. The tool then analyzes traffic from these addresses to identify potential Mac addresses to be impersonated. As a result, if the wifi router enables access via only Mac address checks, then a user could obtain wifi access.",
            descBullets: [  "Automatic detection of valid Mac addresses near the attacker’s machine",
                            "Traffic analysis using Wireshark and TCP identifies Mac addresses to impersonate",
                            "Simple install using pip"
            ],
            projectLogo: require("../../assets/images/wifi.webp"),
            projectUrl: "https://github.com/MaddenJohn/archivedProjects/tree/master/Python/Security/MacAttack/macattcMain"
        },
        {
            title: "DineTexas",
            description: "DineTexas is an iOS mobile application for students at The University of Texas at Austin to use to find student rated restaurants in the Austin area. Students could create an account with this mobile application, rate restaurants in the local area, and see restaurants that have received high ratings from other students.",
            descBullets: [  "Authentication used Firebase to automate emails for user identity and store credentials",
                            "Easy installation for mobile devices through packages"
            ],
            projectLogo: require("../../assets/images/dine-texas.webp"),
            projectUrl: "https://github.com/MaddenJohn/archivedProjects/tree/master/Swift/cs378/dineTexasBackup2/dineTexas"
        },
        {
            title: "PintOS",
            description: "PintOS is an operating system with minimal functionality. I built upon this operating system to add multiple features including threading, user programs, virtual memory, and file system.",
            descBullets: [  "Simple operating system coded in C",
                            "Threading features included interrupts and thread scheduling",
                            "User program features included argument passing, memory access, system call infrastructure, and system calls",
                            "Virtual memory features included page and frame table management, stack growth, page reclamation, and frame eviction",
                            "File system features included a buffer cache, extensible files, and subdirectories "
            ],
            projectLogo: require("../../assets/images/code.webp"),
            projectUrl: "https://github.com/MaddenJohn/archivedProjects/tree/master/C/Pintos/cs439p2-master/src"
        },
        {
            title: "AES 256",
            description: "This project takes in a file of hex text and uses the 256-bit key Advanced Encryption Standard to encrypt text. This project also has the ability to decrypt a text using this same 256-bit key. The way this works is through the subBytes, mixColumns, shiftRows, and roundKey methods in a 14 round cycle to modify data. The key also is different for each round, which allows for a complex way of encrypting a file of data.",
            descBullets: [  "AES 256-bit Military grade encryption",
                            "Encryption and decryption throughput of 17-19MB/second",
                            "14 round cycle with multiple data transformation methods including rotation and substitution"
            ],
            projectLogo: require("../../assets/images/aes.webp"),
            projectUrl: "https://github.com/MaddenJohn/archivedProjects/tree/master/Java/CS361/jm76685_project5"
        },
        {
            title: "Tron",
            description: "Tron is a Java program created to mimic the light bikes (Tron) game that you can find on the internet. This project used object oriented principles, JApplet, and listeners to create the game system.",
            descBullets: [  "Fully functional JApplet Tron game",
                            "Computer and multiplayer mode enabled"
            ],
            projectLogo: require("../../assets/images/tron.webp"),
            projectUrl: "https://github.com/MaddenJohn/archivedProjects/tree/master/Java/Tron"
        }
    ] 

    return (
        <Fade direction="up" duration={1000} triggerOnce={true}>
            <div id="projects">
                <div className="project-container" id="workProject">
                    <div>
                        <h1 className="project-heading">Personal Projects</h1>
                        <div className="project-cards-div">
                        {projects.map((card, i) => {
                            return (
                            <ProjectCard
                                key={i}
                                cardInfo={card}
                            />
                            );
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
      );
};