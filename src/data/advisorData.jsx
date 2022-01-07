import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";

export const advisorData = [
  {
    image: require("../assets/advisors/advisor1.jpg").default,
    head: "Luke ‘Kayaba’ Parker ",
    post: "Ethereum advisor",
    about: ["Experienced with solidity.", " Eye for detail."],
    socialLinks: [
      {
        name: "twitter",
        link: "https://twitter.com/kayabanerve?lang=en",
        img: twitter,
      },
    ],
  },
  {
    image: require("../assets/advisors/advisor2.jpg").default,
    head: "Geoffrey ‘Chockoblock’ Robertson",
    post: "UX mastermind",
    about: [
      "Educator at Baltimore University.",
      "Neilsen-Norman institute fellow.",
    ],
    socialLinks: [
      {
        name: "twitter",
        link: "https://twitter.com/GBRme",
        img: twitter,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/geoffrey-robertson/",
        img: linkedin,
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/gbrme/",
        img: instagram,
      },
    ],
  },
  {
    image: require("../assets/advisors/advisor3.jpg").default,
    head: "Chad ‘Rhubarbarian’ Ballantyne",
    post: "Branding supremo",
    about: [
      "Over 24 years branding experience.",
      "Creator of various Crypto brands.",
    ],
    socialLinks: [
      {
        name: "twitter",
        link: "https://twitter.com/rhubarbmedia",
        img: twitter,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/company/rhubarb-media-inc./?originalSubdomain=ca",
        img: linkedin,
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/rhubarbmedia/?hl=en",
        img: instagram,
      },
    ],
  },
  {
    image: require("../assets/advisors/advisor4.jpg").default,
    head: "Cryptosi",
    post: "CEO / FOUNDER",
    about: ["Serial Crypto Entrprenuer.", "Former PIVX team member."],
    socialLinks: [
      {
        name: "twitter",
        link: "https://twitter.com/Crypto_SI",
        img: twitter,
      },
    ],
  },
];
