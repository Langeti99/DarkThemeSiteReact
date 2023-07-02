import { v1 } from "uuid";

import project01 from "./../img/projects/01.jpg";
import project01big from "./../img/projects/01-big.jpg";

import project02 from "./../img/projects/02.jpg";
import project02big from "./../img/projects/02-big.jpg";

import project03 from "./../img/projects/03.jpg";
import project03big from "./../img/projects/03-big.jpg";

import project04 from "./../img/projects/04.jpg";
import project04big from "./../img/projects/04-big.jpg";

import project05 from "./../img/projects/05.jpg";
import project05big from "./../img/projects/05-big.jpg";

import project06 from "./../img/projects/06.jpg";
import project06big from "./../img/projects/06-big.jpg";

export const projects = [
  {
    id: v1(),
    title: "Gaming streaming portal",
    img: project01,
    imgBig: project01big,
    skills: "React, Node.js, MongoDB",
    gitHubLink: "https://github.com",
  },
  {
    id: v1(),
    title: "Video service",
    img: project02,
    imgBig: project02big,
    skills: "React Native",
    gitHubLink: "https://github.com",
  },
  {
    id: v1(),
    title: "Video portal",
    img: project03,
    imgBig: project03big,
    skills: "Vue, Node.js, MongoDB",
    gitHubLink: "https://github.com",
  },
  {
    id: v1(),
    title: "Dating app",
    img: project04,
    imgBig: project04big,
    skills: "React, Node.js, Express",
    gitHubLink: "https://github.com",
  },
  {
    id: v1(),
    title: "Landing",
    img: project05,
    imgBig: project05big,
    skills: "React, .Net, MongoDB",
    gitHubLink: "https://github.com",
  },
  {
    id: v1(),
    title: "Gaming community",
    img: project06,
    imgBig: project06big,
    skills: "React, Node.js, MongoDB",
    gitHubLink: "https://github.com",
  },
];
