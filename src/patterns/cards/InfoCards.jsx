import React from "react";

import "../../styles/patterns/cards/card.scss";

const InfoCards = ({ variant, img, head, data }) => {
  return (
    <div className="infoCards ">
      <img src={img} alt="featureIcon" className="mb-30" />
      <p
        className={`mb-20 ${
          variant !== "white" ? "text_primary_20_W500" : "text_white_20_W500"
        } `}
      >
        {head}
      </p>
      <p
        className={`${
          variant !== "white" ? "text_secondary_14_W400" : "text_whiteSec_14_W400"
        } `}
      >
        {data}
      </p>
    </div>
  );
};

export default InfoCards;
