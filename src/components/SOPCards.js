import React, { useState } from "react";
import "./SOPStyling.css";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

const sopData = [
  { title: "Result Generation", path: "https://drive.google.com/file/d/1lKvmP13_37Uf2g95oGuPs62Px1R3nkQz/view?usp=sharing" },
  { title: "Assessor Upload", path: "/assessor-upload" },
  { title: "Uploading", path: "/uploading" },
  { title: "Agency Validation", path: "/agency-validation" },
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







