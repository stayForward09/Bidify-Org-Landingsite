import React from "react";
import { roadmap } from "../data/roadmap";
import "../styles/patterns/roadmap.scss";

const Roadmap = () => {
  const renderRoadmaps = (
    <div className="card_wrapper">
      {roadmap.map((data, index) => {
        return (
          <div key={index} className="card">
            <p className="text_primary_20_W500 mb-15">{data.no}</p>
            <p className="text_labelPri_16_W500 mb-15">{data.title}</p>
            <p className="text_secondary_14_W400">{data.description}</p>
            <img src={data.image} alt={data.title} className="card_logo" />
            {/* <div className="after">
              <p></p>
            </div>
            <div className="before">
              <p></p>
            </div> */}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="roadmap" id="roadmap">
      <p className="text_primary_24_W600 mb-20">
        This roadmap gives you a sneak peak into the future of Bidify, it is
        subject to change
      </p>

      {renderRoadmaps}
    </div>
  );
};

export default Roadmap;
