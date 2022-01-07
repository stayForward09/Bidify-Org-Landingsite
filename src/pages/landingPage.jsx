import React from "react";
import Slider from "react-slick";
// import ReactPlayer from "react-player";
// import { useHistory } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/pages/landingPage.scss";

import heroIllustration from "../assets/abstracts/heroIllustration.svg";
// import explainThumb from "../assets/icons/play.png"
import team from "../assets/abstracts/team.svg";
// import testimonialMap from "../assets/abstracts/testimonialMap.svg";

import { featureData } from "../data/featureData";
// import { gettingStartedData } from "../data/gettingStarted";
import { ecosystemData } from "../data/ecosystemData";
// import { exploreData } from "../data/exploreData";
import { advisorData } from "../data/advisorData";

import InfoCards from "../patterns/cards/InfoCards";
// import Explore from "../patterns/cards/Explore";
import Advisors from "../patterns/cards/Advisors";

import Partners from "../patterns/Partners";

// import ContactUs from "../patterns/ContactUs";
import JoinUs from "../patterns/JoinUs";
import Button from "../components/Button";

// import { sellerData1, sellerData2, sellerData3 } from "../data/sellerData";
// import Seller from "../patterns/cards/Seller";

// import arrowDown from "../assets/icons/arrowDown.svg";
// import arrowRight from "../assets/icons/arrowRight.svg";
// import arrowLeft from "../assets/icons/arrowLeft.svg";
import scroll from "../assets/icons/scrollDown.gif";
import Roadmap from "../patterns/roadmap";
import ReactPlayer from "react-player";

const landingPage = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const RenderCarousel = () => {
    return (
      <div className="carousel">
        <div>
          <p className="text_white_32_W600 mb-20">
            Build your own NFT store with our help
          </p>
          <p className="text_whiteSec_14_W400 mb-20">
            From the ground up we have partnerships with some of the leading
            companies within the blockchain space, including top canadian
            branding house RHUBARB MEDIA
          </p>
          <a
            target="blank"
            href="http://app.bidify.org/"
            style={{ color: "#BF5B18" }}
          >
            <Button variant="secondary" type="submit">
              Explore Marketplace
            </Button>
          </a>
          {/* <div className="carousel_pointers" style={{ marginTop: "40px" }}>
            <div>
              <p className="text_white_16_W600">65.5K+</p>
              <p className="text_whiteSec_14_W400">Artworks</p>
            </div>
            <div>
              <p className="text_white_16_W600">33.4K+</p>
              <p className="text_whiteSec_14_W400">Artists</p>
            </div>
            <div>
              <p className="text_white_16_W600">65.5K+</p>
              <p className="text_whiteSec_14_W400">Live Auctions</p>
            </div>
          </div> */}
        </div>
        <div>
          <div className="container-wrapper">
            <div className="container">
              <Slider {...settings}>
                <div className="block-content">
                  <ReactPlayer
                    url="https://youtu.be/nfGdBAH3P48"
                    className="player-wrapper"
                    width={"100%"}
                  />
                </div>
                <div className="block-content">
                  <img src={heroIllustration} alt="heroIllustration" />
                </div>
                <div className="block-content">
                  <p className="text_white_32_W600 ">Tutorials</p>
                  <p className="text_white_32_W600 ">coming soon...</p>
                </div>
                <div className="block-content">
                  <p className="text_white_32_W600 ">Recent Sales</p>
                  <p className="text_white_32_W600 ">coming soon...</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="carousel_scroll">
          <img src={scroll} alt="scroll" width="24" height="24" />
          <p className="text_white_14_W500_v2">Scroll Down</p>
        </div>
      </div>
    );
  };

  const renderFeatures = (
    <div className="features" id="features">
      {featureData.map((item, key) => (
        <InfoCards
          img={item.image}
          head={item.head}
          data={item.data}
          key={key}
        />
      ))}
    </div>
  );

  // const renderGettingStarted = (
  //   <div className="gettingStarted">
  //     <div>
  //       <p className="text_primary_24_W600 mb-20">
  //         Get started with Bidify in just 3 simple steps
  //       </p>
  //       <p className="text_secondary_14_W400 mb-30">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
  //         viverra velit risus, venenatis ultricies nunc phase nulla vitae. Dolor{" "}
  //       </p>
  //     </div>
  //     <div className="gettingStarted_cards">
  //       {gettingStartedData.map((item, key) => (
  //         <InfoCards
  //           img={item.image}
  //           head={item.head}
  //           data={item.data}
  //           key={key}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );

  const renderEcosystem = (
    <div className="ecosystem">
      <p className="text_white_24_W500">
        Bidify Ecosystem is diverse and balanced, it consists of 4 major parties
      </p>
      <div className="ecosystem_cards">
        {ecosystemData.map((item, key) => (
          <InfoCards
            variant="white"
            img={item.image}
            head={item.head}
            data={item.data}
            key={key}
          />
        ))}
      </div>
    </div>
  );

  const renderAboutUs = (
    <div className="aboutUs" id="aboutus">
      <div>
        <div>
          <p className="text_primary_24_W600 mb-20">About Bidify</p>
          <p className="text_secondary_14_W400 mb-20">
            Bidify aims to be the premier tool for auction listing and selling
            NFTs on the Ethereum network and beyond. It will achieve this by
            using a unique incentive system which allows the listing website and
            a separate selling website to both collect a percentage of the final
            sale value. This totally decentralises the sale process and allows
            anybody to list or sell any NFT. This also allows anybody anywhere
            in the world to create an auction website and have a ready stream of
            NFTs for sale, including you!
          </p>
          <p className="text_secondary_14_W400 mb-20">
            Bidify has a host of awesome features as explained here by Cryptosi
          </p>
          <p className="text_secondary_14_W400 mb-20">
            However this is just the beginning, if you have any suggestions let
            us know in the Bidify discord chat rooms
          </p>
          <div className="aboutUs_links" style={{ alignItems: "center" }}>
            <a
              href="https://discord.bidify.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" type="submit">
                Join our discord
              </Button>
            </a>

            <a href="/#advisors" style={{ textDecoration: "none" }}>
              <p className="text_labelSec_14_W500">Meet Our Advisors</p>
            </a>
          </div>
        </div>
        <img src={team} alt="team" />
      </div>
      {/* {renderGettingStarted} */}
      {renderEcosystem}
    </div>
  );

  // const renderTopSellers = (
  //   <div className="topSellers">
  //     <div className="mb-30">
  //       <p className="mb-20">
  //         <span className="text_primary_24_W600">
  //           Here are our top sellers of the{" "}
  //         </span>
  //         <span className="text_labelPri_24_W500">week</span>
  //         <img src={arrowDown} alt="arrow" />
  //       </p>
  //       <p className="text_secondary_14_W400_v2">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
  //         viverra velit risus, venenatis ultricies nunc phase nulla vitae. Dolor{" "}
  //       </p>
  //     </div>
  //     <div className="topSellers_details" style={{ marginTop: "20px" }}>
  //       <div>
  //         {sellerData1.map((item, index) => (
  //           <Seller
  //             image={item.image}
  //             name={item.name}
  //             id={item.id}
  //             rank={item.rank}
  //             key={index}
  //           />
  //         ))}
  //       </div>
  //       <div>
  //         {sellerData2.map((item, index) => (
  //           <Seller
  //             image={item.image}
  //             name={item.name}
  //             id={item.id}
  //             rank={item.rank}
  //             key={index}
  //           />
  //         ))}
  //       </div>
  //       <div className="singleGrid">
  //         {sellerData3.map((item, index) => (
  //           <Seller
  //             image={item.image}
  //             name={item.name}
  //             id={item.id}
  //             rank={item.rank}
  //             key={index}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  // const renderExplore = (
  //   <div className="explore" id="auction">
  //     <div className="mb-30">
  //       <div>
  //         <p className="text_primary_24_W600 mb-20">
  //           Explore the Bidify auctions
  //         </p>
  //         {/* <p className="text_secondary_14_W400_v2">
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
  //           viverra velit risus, venenatis ultricies nunc phase nulla vitae.
  //           Dolor{" "}
  //         </p> */}
  //       </div>
  //       <div className="explore_links mt-40">
  //         <p className="text_secondary_14_W400_v3">
  //           <a
  //             style={{
  //               textDecoration: "none",
  //               color: "inherit",
  //               whiteSpace: "nowrap",
  //             }}
  //             href="https://decentraland.org/"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Decentraland
  //           </a>
  //         </p>
  //         <p className="text_secondary_14_W400_v3">
  //           <a
  //             style={{
  //               textDecoration: "none",
  //               color: "inherit",
  //               whiteSpace: "nowrap",
  //             }}
  //             href="https://www.larvalabs.com/cryptopunks"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             CryptoPunks
  //           </a>
  //         </p>
  //         <p className="text_secondary_14_W400_v3">
  //           <a
  //             style={{
  //               textDecoration: "none",
  //               color: "inherit",
  //               whiteSpace: "nowrap",
  //             }}
  //             href="https://boredapeyachtclub.com/#/"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Bored Ape yacht club
  //           </a>
  //         </p>
  //         <p className="text_secondary_14_W400_v3">
  //           <a
  //             style={{
  //               textDecoration: "none",
  //               color: "inherit",
  //               whiteSpace: "nowrap",
  //             }}
  //             href="https://unstoppabledomains.com/"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Domains
  //           </a>
  //         </p>
  //         <p className="text_secondary_14_W400_v3">
  //           <a
  //             style={{
  //               textDecoration: "none",
  //               color: "inherit",
  //               whiteSpace: "nowrap",
  //             }}
  //             href="https://pymons.com/"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Pymons
  //           </a>
  //         </p>
  //         <p className="text_secondary_14_W400_v3">
  //           <a
  //             style={{
  //               textDecoration: "none",
  //               color: "inherit",
  //               whiteSpace: "nowrap",
  //             }}
  //             href="https://www.sandbox.game/en/"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Sandbox
  //           </a>
  //         </p>
  //       </div>
  //     </div>
  //     <div className="explore_cards mb-30">
  //       {exploreData.map((item, key) => (
  //         <Explore
  //           image={item.image}
  //           head={item.head}
  //           id={item.id}
  //           cost={item.cost}
  //           time={item.time}
  //           key={key}
  //         />
  //       ))}
  //     </div>
  //     <div className="buttonWrapper">
  //       <Button variant="secondary" type="submit">
  //         Explore Creative Artworks
  //       </Button>
  //     </div>
  //   </div>
  // );

  // const renderReviews = (
  //   <div className="reviews">
  //     <p className="text_primary_24_W600 mb-20">
  //       Trusted by over 4 Million+ users all over the world. See what they say
  //       about Bidify{" "}
  //     </p>
  //     <div className="review_map">
  //       <img src={testimonialMap} alt="testimonialMap" />
  //       <div className="reviews_detail">
  //         <div>
  //           <p className="mb-10 text_labelBlack_16_W600">Andrew Bellkings</p>
  //           <p className="mb-20 text_secondary_12_W400_v2">
  //             Financial Advisor, Accenture
  //           </p>
  //           <div className="arrows_block">
  //             <img src={arrowLeft} alt="arrowLeft" className="arrowLeft" />
  //             <img src={arrowRight} alt="arrowRight" className="arrowRight" />
  //             <p className="text_secondary_14_W400_v2">
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
  //               proin amet ultrices in quis lectus commodo sed enim. Mattis
  //               lacus, sed ac sapien sodales dictum nam libero pharetra.
  //               Aliquam.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  const renderAdvisors = (
    <div className="advisors" id="advisors">
      <div>
        <p className="text_primary_24_W600 mb-20">Meet our advisors</p>
        {/* <p className="text_secondary_14_W400_v2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
          viverra velit risus, venenatis ultricies nunc phase nulla vitae. Dolor{" "}
        </p> */}
      </div>
      <div></div>
      {advisorData.map((item, key) => (
        <Advisors
          image={item.image}
          head={item.head}
          about={item.about}
          post={item.post}
          socialLinks={item.socialLinks}
          key={key}
        />
      ))}
    </div>
  );

  return (
    <div className="landingPage">
      <div className="padding_container"></div>
      <div className="padding_container">{RenderCarousel()}</div>
      <div className="padding_container">{renderFeatures}</div>
      <div className="padding_container" style={{ background: "#f8f8f8" }}>
        {renderAboutUs}
      </div>
      {/* <div className="padding_container" style={{ background: "#f8f8f8" }}>
        {renderExplore}
      </div> */}
      <Roadmap />
      <div className="padding_container"> {renderAdvisors}</div>
      <div className="padding_container" style={{ background: "#f8f8f8" }}>
        <Partners />
      </div>
      <div className="padding_container">
        <JoinUs />
      </div>
      {/* {renderTopSellers} */}
      {/* {renderReviews} */}
      {/* <ContactUs /> */}
    </div>
  );
};

export default landingPage;
