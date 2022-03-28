import { EducationCardDto } from "../../models/education-card.model";
import "./EducationCard.scss";
import React, {useState, createRef, RefObject} from "react";
import ColorThief from "colorthief";

export type ExportCardProps = {
    cardInfo: EducationCardDto;
}

export default function ExperienceCard2({cardInfo}: ExportCardProps) {
  const [colorArrays, setColorArrays] = useState([0,0,0]);
  const imgRef: RefObject<HTMLImageElement> = createRef();
    

  async function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values: any[]) {
    return "rgb(" + values.join(", ") + ")";
  }

  return (
    <div className={"education-card-dark"}>
      <div style={{background: rgb(colorArrays)}} className="education-banner">
        <div className="education-blurred_div"></div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="education-roundedimg"
          src={cardInfo.logo}
          alt={cardInfo.title}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="education-text-details">
        <h5
          className="education-text-role dark-mode-text"
        >
          {cardInfo.title}
        </h5>
        <h5
          className="education-text-date dark-mode-text"
        >
          {cardInfo.subtitle}
        </h5>
        <p
          className="subTitle education-text-desc dark-mode-text"
        >
          {cardInfo.date}
        </p>
      </div>
    </div>
  );
}
