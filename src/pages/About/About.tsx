import "./About.css";
import "../../Common.css";

import Menu from "../../components/menu/Menu";
import Title from "../../components/title/Title";
import { PageTitle } from "../../components/pageTitle/PageTitle";

import text from "./About.json";

import headshot from "../../images/headshot.jpg";

function Body() {
  return (
    <div className="BodyContainer FadeItem">
      <PageTitle pageTitle={text.PageTitle}></PageTitle>
      <Intro></Intro>
      <PageTitle pageTitle={"Timeline"}></PageTitle>
    </div>
  );
}

function Intro() {
  return (
    <div className="IntroContainer Inset">
      <div className="TextContainer BodyText">
        {text.Intro.map((text) => (
          <p>{text}</p>
        ))}
      </div>
      <img src={headshot} alt="headshot" className="Headshot" />
    </div>
  );
}

function About() {
  return (
    <div className="GridContainer">
      <Title></Title>
      <Menu></Menu>
      <Body></Body>
    </div>
  );
}

export default About;
