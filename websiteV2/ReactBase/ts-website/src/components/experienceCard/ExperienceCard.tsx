import { ExperienceCardDto } from "../../models/experience-card.model";
import "./ExperienceCard.scss";
import React, {useState, createRef, RefObject} from "react";
import ColorThief from "colorthief";

export type ExportCardProps = {
    cardInfo: ExperienceCardDto;
}

export default function ExperienceCard({cardInfo}: ExportCardProps) {
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
    <div className={"experience-card-dark"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companyLogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className="experience-text-role dark-mode-text"
        >
          {cardInfo.role}
        </h5>
        <h5
          className="experience-text-date dark-mode-text"
        >
          {cardInfo.date}
        </h5>
        <p
          className="subTitle experience-text-desc dark-mode-text"
        >
          {cardInfo.description}
        </p>
        <ul>
          {getDescBullets(cardInfo.descBullets)}
        </ul>
      </div>
    </div>
  );
}
