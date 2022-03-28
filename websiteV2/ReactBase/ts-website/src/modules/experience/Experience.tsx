import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "./Experience.scss";
import {Fade} from "react-awesome-reveal";

export default function Experience() {
    const experiences = [
        {
            company: "Credera",
            date: "Nov 2020 - Present",
            role: "Technology Consultant",
            description: "",
            descBullets: [  "Built marketing web application",
                            "Migrated on-prem services to AWS"
            ],
            companyLogo: require("../../assets/images/credera-logo.webp")
        },
        {
            company: "Praetorian",
            date: "Nov 2019 - Aug 2020",
            role: "Security Engineer",
            description: "",
            descBullets: [  "Identified 300 vulnerabilities during IoT, Web, Cloud, and Mobile application penetration tests",
                            "Presented executive summary and remediation steps for 20 clients",
                            "Maintained a customer NPS satisfaction rating of 96%"
                        ],
            companyLogo: require("../../assets/images/praetorian-logo.webp")
        },
        {
            company: "Capital One",
            date: "Sept 2018 - Nov 2019",
            role: "Associate Software Engineer",
            description: "",
            descBullets: [  "Developed Go application to monitor AWS WAF costs across enterprise",
                            "Redesigned client integration workflow, reducing time by 50%",
                            "Collaborated with multiple teams to create automation platform, to reduce test account creation from 2 weeks to 1 hour"
            ],
            companyLogo: require("../../assets/images/capital-one-logo.webp")
        }
    ] 

    return (
        <Fade direction="up" duration={1000} triggerOnce={true}>
            <div id="experience">
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-heading">Experience</h1>
                        <div className="experience-cards-div">
                        {experiences.map((card, i) => {
                            return (
                            <ExperienceCard
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