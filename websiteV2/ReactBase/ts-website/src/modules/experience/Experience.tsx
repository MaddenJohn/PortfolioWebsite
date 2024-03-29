import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "./Experience.scss";
import {Fade} from "react-awesome-reveal";

export default function Experience() {
    const experiences = [
        {
            company: "Credera",
            date: "Nov 2020 - Present",
            role: "Senior Technology Consultant",
            description: "",
            descBullets: [  "Senior developer responsible for migrating data processing services to AWS",
             "Designed POCs for ETL and fully automated failover for Confluent Kafka",
             "Orchestrated and executed the successful launch of 5 extensive project milestones",
             "Assigned to a multi-billion dollar client across different projects for 3+ years",
             "Completed approximately 100 deployments, 200 features, and 275 bug fixes",
             "Regularly conducted presentations to ensure alignment of project objectives",
             "Enhanced client’s platform by programming new features for common services",
             "Selected to mentor an intern, providing feedback and a formal performance review",
             "Managed project’s security requirements, including stakeholder updates",
             "Identified a global, critical risk misconfiguration issue in the client’s 3rd party MFA",
             "Spearheaded a company-wide script to aggregate coach data from 6 sources",
             "Developed a generic marketing web application utilized by multiple vendors",
             "Promoted to Senior Consultant for outstanding performance and leadership",
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
                            "Maintained a customer NPS satisfaction rating of 96%",
                            "Developed internal docker containers to automate tests for clients"
                        ],
            companyLogo: require("../../assets/images/praetorian-logo.webp")
        },
        {
            company: "Capital One",
            date: "Sept 2018 - Nov 2019",
            role: "Associate Software Engineer",
            description: "",
            descBullets: [  "Developed Go application to monitor AWS WAF costs across enterprise",
                            "Redesigned client integration workflow, halving expected completion duration",
                            "Created a cross-team platform, reducing test account creation time by 99%"
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