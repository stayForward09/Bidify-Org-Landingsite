import React from "react";

import "../../styles/patterns/cards/card.scss";

const Advisors = ({ image, head, post, about, socialLinks }) => {
  return (
    <div className="advisorCards">
      {/* <div style={{ width: "224px", height: 200, whiteSpace: "nowrap" }}> */}
      <img
        src={image}
        alt="head"
        style={{ width: "224px", height: "200px", objectFit: "cover" }}
      />
      {/* </div> */}
      <div>
        <p className="text_primary_20_W500 mb-10">{head}</p>
        <p className="text_secondary_14_W400 mb-10">{post}</p>
        <div className="mb-20">
          {about.map((data, index) => (
            <p key={index} className="text_secondary_12_W400_v2">
              {data}
            </p>
          ))}
        </div>
        <div>
          {socialLinks.map((data, index) => (
            <a
              key={index}
              href={data.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={data.img} alt={data.name} className="mr-25" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advisors;
