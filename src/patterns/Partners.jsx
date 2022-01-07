import React from "react";

import "../styles/patterns/partners.scss";

import Button from "../components/Button";
import handshake from "../assets/icons/handshake.png";
// import partner1 from "../assets/images/partner1.svg";
// import partner2 from "../assets/images/partner2.svg";
// import partner3 from "../assets/images/partner3.svg";
// import partner4 from "../assets/images/partner4.svg";
// import partner5 from "../assets/images/partner1.svg";
// import partner6 from "../assets/images/partner2.svg";
// import partner7 from "../assets/images/partner3.svg";
// import partner8 from "../assets/images/partner4.svg";

const Partners = () => {
  return (
    <div className="partners">
      <div>
        <p className="text_primary_24_W600 mb-20">Become a partner of Bidify</p>
        <img src={handshake} alt="handshake" width="100" height="100" />
      </div>

      <div style={{ display: "grid", placeItems: "center", marginTop: "2em" }}>
        <a
          href="http://partnerships.bidify.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary">Become A Bidify Partner</Button>
        </a>
      </div>
    </div>
  );
};

export default Partners;
