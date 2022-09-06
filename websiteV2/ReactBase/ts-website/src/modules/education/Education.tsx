import React from "react";
import EducationCard from "../../components/educationCard/EducationCard";
import "./Education.scss";
import {Fade} from "react-awesome-reveal";

export default function Education() {
    const education = {
        schools: [
            {
                title: "The University of Texas at Austin",
                subtitle: "B.S. in Computer Science | GPA 3.89",
                date: "September 2014 - May 2018",
                logo: require("../../assets/images/ut-logo.webp")
            }
        ],
        certifications: [
            {
                title: "AWS Certified Solutions Architect - Associate",
                subtitle: "AWS",
                date: "May 2019 - May 2022",
                link: "https://www.credly.com/badges/f1ab9aa5-0ff5-44ef-8f3f-0730c4e124ca",
                logo: require("../../assets/images/aws-logo.webp")
            },
            {
                title: "Certified Secure Software Engineer - Professional",
                subtitle: "Secure Code Warrior",
                date: "Nov 2018 - Nov 2019",
                logo: require("../../assets/images/secure-code-warrior-logo.webp")
            },
            {
                title: "InfoSec Certification",
                subtitle: "The University of Texas at Austin",
                date: "May 2018",
                logo: require("../../assets/images/ut-logo.webp")
            }
        ]
    }

    return (
        <Fade direction="up" duration={1000} triggerOnce={true}>
            <div id="education">
                <div className="education-container" id="education">
                <div>
                    <h1 className="education-heading">Education</h1>
                    <div className="education-cards-div">
                        {education.schools.map((card, i) => {
                            return (
                            <EducationCard
                                key={i}
                                cardInfo={card}
                            />
                            );
                        })}
                    </div>
                <div />
                <div className="education-container" id="education"></div>
                    <h1 className="education-heading">Certifications</h1>
                    <div className="education-cards-div">
                    {education.certifications.map((card, i) => {
                        return (
                        <EducationCard
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
}