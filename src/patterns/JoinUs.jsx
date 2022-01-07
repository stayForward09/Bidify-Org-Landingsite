import React, { useEffect, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "../styles/patterns/joinUs.scss";
import dropMail from "../assets/images/news.svg";

import "../styles/components/input.scss";

const url =
  "https://cryptosi.us2.list-manage.com/subscribe/post?u=853773d4ba400f6b907120579&amp;id=da5efafe44";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [greetings, setGreetings] = useState();

  useEffect(() => {
    if (status === "success") {
      setEmail("");
      setGreetings("Thank you for subscribing!");
      setTimeout(() => setGreetings(), 5000);
    }
  }, [status]);

  useEffect(() => {
    if (message?.includes(" already subscribed")) {
      setError("This email is already subscribed to Bidify newsletter");
      setTimeout(() => setError(), 5000);
      console.log(message);
    }
    if (message?.includes("invalid")) {
      console.log(message);
      setError("Invalid email address");
      setTimeout(() => setError(), 5000);
    }
  }, [message]);

  function validateEmail(e) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(e).toLowerCase());
  }

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      if (!validateEmail(email)) {
        setError("Invalid email address");
        setTimeout(() => setError(), 3000);
        return;
      } else {
        onValidated({ EMAIL: email });
      }
    }
  };

  return (
    <div className="inputTag">
      <input
        type="email"
        className="mb-10"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder="Enter your email address here"
        required
        readOnly={status === "sending" ? true : false}
        onKeyPress={(e) => handleSubmit(e)}
      />
      {greetings && <p className="text_white_24_W500">{greetings}</p>}
      {error && <p className="text_whiteSec_14_W400">{error}</p>}
    </div>
  );
};

const JoinUs = () => {
  return (
    <div className="joinUs">
      <div>
        <p className="text_white_24_W500 mb-20">
          Join the Bidify weekly mailing list to never miss any updates on
          unique and extraordinary NFT artworks.
        </p>
        <p className="text_whiteSec_14_W400 mb-30">
          Subscribe to our newsletter to stay updated on the latest additions of
          NFT artworks every Monday at 11AM. You can unsubscribe from the
          mailing list at anytime without any questions asked.{" "}
        </p>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
      <img src={dropMail} alt="dropMail" />
    </div>
  );
};

export default JoinUs;
