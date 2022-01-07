import React from "react";

import "../../styles/patterns/cards/card.scss";

const Explore = ({ image, head, id, cost, time }) => {
  return (
    <div className="exploreCards">
      <img src={image} alt="explore" className="mb-15" />
      <p className="text_labelBlack_16_W600 mb-10">{head}</p>
      <p className="text_secondary_14_W400_v3 mb-20">By: {id}</p>
    </div>
  );
};

export default Explore;
