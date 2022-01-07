import React, { useState } from "react";
import Button from "../components/Button";

import "../styles/patterns/navbar.scss";

import logo from "../assets/images/logo.svg";
import menu from "../assets/icons/menuList.svg";
import close from "../assets/icons/close.svg";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const renderSiderbar = (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <a
        href="/#"
        className="text_primary_14_W500  "
        onClick={() => setSidebar(false)}
      >
        Home
      </a>
      <a
        href="/#aboutus"
        className="text_secondary_14_W400"
        onClick={() => setSidebar(false)}
      >
        About Us
      </a>
      <a
        href="/#roadmap"
        className="text_secondary_14_W400"
        onClick={() => setSidebar(false)}
      >
        Roadmap
      </a>
      <a
        href="/#features"
        className="text_secondary_14_W400"
        onClick={() => setSidebar(false)}
      >
        Features
      </a>
      <a
        href="/#contactus"
        className="text_secondary_14_W400"
        onClick={() => setSidebar(false)}
      >
        Contact Us
      </a>
      <a
        href="http://app.bidify.org/"
        target="blank"
        onClick={() => setSidebar(false)}
      >
        <Button variant="primary" type="submit">
          Explore Market
        </Button>
      </a>
    </div>
  );
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar_contents">
        <div className="navbar_contents_links">
          <a
            href="/#"
            className="text_primary_14_W500  "
            onClick={() => setSidebar(false)}
          >
            Home
          </a>
          <a
            href="/#aboutus"
            className="text_secondary_14_W400"
            onClick={() => setSidebar(false)}
          >
            About Us
          </a>
          <a
            href="/#roadmap"
            className="text_secondary_14_W400"
            onClick={() => setSidebar(false)}
          >
            Roadmap
          </a>
          <a
            href="/#features"
            className="text_secondary_14_W400"
            onClick={() => setSidebar(false)}
          >
            Features
          </a>
        </div>
        <a
          href="http://app.bidify.org/"
          target="blank"
          onClick={() => setSidebar(false)}
        >
          <Button variant="primary" type="submit">
            Explore Market
          </Button>
        </a>
        <img
          src={sidebar ? close : menu}
          alt="menu"
          width={24}
          height={24}
          className="menuList cursor"
          onClick={() => setSidebar((s) => !s)}
        />
      </div>
      {renderSiderbar}
    </div>
  );
};

export default Navbar;
