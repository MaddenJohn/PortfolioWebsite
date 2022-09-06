import { ProjectCardDto } from "../../models/project-card.model";
import "./ProjectCard.scss";
import React, {useState, createRef, RefObject} from "react";
import ColorThief from "colorthief";
import { SocialIcon } from 'react-social-icons';

export type ExportCardProps = {
    cardInfo: ProjectCardDto;
}

export default function ProjectCard({cardInfo}: ExportCardProps) {
  const [colorArrays, setColorArrays] = useState([0,0,0]);
  const imgRef: RefObject<HTMLImageElement> = createRef();
    

  async function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values: any[]) {
    return "rgb(" + values.join(", ") + ")";
  }

  function getDescBullets(descBullets: string[]) {
    return descBullets
      ? descBullets.map((item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, i: React.Key | null | undefined) => (
          <li
            key={i}
            className="subTitle dark-mode-text"
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={"project-card-dark"}>
      <div style={{background: rgb(colorArrays)}} className="project-banner">
        <div className="project-blurred_div"></div>
        <div className="project-div-company">
          <h5 className="project-text-company">{cardInfo.title}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="project-roundedimg"
          src={cardInfo.projectLogo}
          alt="ProjectImage"
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="project-text-details">
        <p
          className="subTitle project-text-desc dark-mode-text"
        >
          {cardInfo.description}
        </p>
        <ul>
          {getDescBullets(cardInfo.descBullets)}
        </ul>
        <div className="project-social-links">
            <SocialIcon
                url={cardInfo.projectUrl}
                bgColor="#ffffff"
                style={{ height: 35, width: 35 }}
            />
        </div>
      </div>
    </div>
  );
}
