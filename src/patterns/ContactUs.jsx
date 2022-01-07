import React from "react";

import emailjs from "emailjs-com";

import "../styles/patterns/contactUs.scss";

import location from "../assets/icons/location.svg";
import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import map from "../assets/images/map.svg";

import Input from "../components/Input";
import Button from "../components/Button";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hmtb5vl",
        "template_aq8l6di",
        e.target,
        "user_aZa8ewIf718iom7ejy3zV"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="contactUs" id="contactus">
      <div>
        <p className="text_primary_24_W600">Get in touch with us!</p>
      </div>
      <div></div>
      <div>
        <div className="contactUs_details">
          <form onSubmit={sendEmail}>
            <p className="text_primary_16_W500 mb-15">Name</p>
            <Input
              type="text"
              placeholder="Enter your name here"
              className="mb-20"
              name="name"
            />
            <p className="text_primary_16_W500 mb-15">Email Address</p>
            <Input
              type="text"
              placeholder="Enter your email address here"
              className="mb-20"
              name="email"
            />
            <p className="text_primary_16_W500 mb-15">Message</p>
            <Input
              type="text"
              placeholder="Enter your message here"
              className="mb-20"
              name="message"
            />
            <Button variant="secondary" type="submit">
              Explore Creative Artworks
            </Button>
          </form>
        </div>
        <div className="contactUs_address">
          <p className="contactUs_address_location">
            <img src={location} alt="location" />
            <span className="text_secondary_14_W400_v2">
              Radisons Avenue, 4517 25th street Washington Ave. Manchester,{" "}
              Kentucky 39495
            </span>
          </p>
          <div className="contactUs_address_pM">
            <p>
              <img src={phone} alt="phone" className="mr-20" />
              <span className="text_secondary_14_W400_v2">+060 8858852257</span>
            </p>
            <p>
              <img src={mail} alt="mail" className="mr-20" />
              <span className="text_secondary_14_W400_v2">
                hello@bidify.com
              </span>
            </p>
          </div>
        </div>
      </div>
      <img src={map} alt="map" className="map" />
    </div>
  );
};

export default ContactUs;
