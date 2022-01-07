import React from "react";

import "../../styles/patterns/cards/card.scss";

const Seller = ({image, name, id, rank}) => {
  return <div className="sellers">
      <div>
        <img src={image} alt={name}/>
        <div>
            <p className="text_primary_16_W500 mb-5">{name}</p>
            <p className="text_secondary_14_W400">{id}</p>
        </div>
      </div>
      <p className="text_primary_16_W500">#{rank}</p>
  </div>;
};

export default Seller;
