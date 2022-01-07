import React from "react";

import "../styles/patterns/footer.scss";

import logo from "../assets/images/bidify_long.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import youtube from "../assets/icons/youtube.svg";
// import bitgo from "../assets/images/bitgo.svg";
// import iso from "../assets/images/iso.svg";

import { links, explore } from "../data/FooterData";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="logo" className="mb-30 " />
        {/* <p className="text_secondary_14_W400_v2 mb-20 description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin
          amet ultrices in quis lectus commodo sed enim.{" "}
        </p> */}
        <div className="mb-30">
          <a
            href="https://twitter.com/Crypto_SI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" className="mr-25" />
          </a>
          <a
            href="https://www.instagram.com/smartreach_official/?hl=en-gb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" className="mr-25" />
          </a>
          <a
            href="https://github.com/Bidify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="mr-25" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCcOzf3f6ZWVlIu-6qQpjudA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
        </div>
        {/* <div>
          <img src={bitgo} alt="bitgo" />
          <img src={iso} alt="iso" />
        </div> */}
      </div>
      <div className="footer_links">
        <div>
          <p className="text_labelBlack_16_W600">Explore</p>
          {explore.map((item, key) => (
            <li key={key}>
              <a href={item.to} target="_blank" rel="noreferrer" className="text_link_14_W400">
                {item.title}
              </a>
            </li>
          ))}
        </div>
        <div>
          <p className="text_labelBlack_16_W600">Links</p>
          {links.map((item, key) => (
            <li key={key}>
              <a href={item.to} target="blank" className="text_link_14_W400">
                {item.title}
              </a>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
