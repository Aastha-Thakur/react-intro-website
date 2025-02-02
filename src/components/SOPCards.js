import React, { useState } from "react";
import "./SOPStyling.css";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

const sopData = [
  { title: "Result Generation", path: "https://drive.google.com/file/d/1lKvmP13_37Uf2g95oGuPs62Px1R3nkQz/view?usp=sharing" },
  { title: "Assessor Upload", path: "https://drive.google.com/file/d/1EFWA-Ci1K2WL3Avho9Oqu-h1xusg5PKe/view?usp=sharing" },
  { title: "Uploading", path: "https://drive.google.com/file/d/1kmvaRWG9uj3sbkgBPxXXz00mHcUdKycy/view?usp=sharing" },
  { title: "Agency Validation", path: "https://drive.google.com/file/d/1Lz7B_D8di0i58e_yRtKfoSMTcLka2ac9/view?usp=sharing" },
];

const SOPCards = () => {
  return (
    <div className="sop-container">
      {sopData.map((sop, index) => (
        <div key={index} className="sop-card">
          <h2 className="sop-title">{sop.title}</h2>
          <div className="read-more-button">
            <a href= {sop.path}
        target = "_blank"
      >Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SOPCards;







