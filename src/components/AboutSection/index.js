import React, { useState } from "react";
import {
  AboutContainer,
  AboutBg,
  VideoBg,
  AboutContent,
  AboutH1,
  AboutP,
  AboutBtnWrapper,
  ArrowForward,
  ArrowRight,
  Span,
} from "./AboutElements";
import { Button } from "../ButtonElements";
import Video from "../../videos/video.mp4";

const AboutSection = () => {
  const [hover, setHover] = useState("");

  return (
    <AboutContainer id='about'>
      <AboutBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </AboutBg>
      <AboutContent>
        <AboutH1>
          <Span>F</Span>lorentina <Span>P</Span>etica
        </AboutH1>
        <AboutP>
          I am a passionate and structured <Span>web developer.</Span>
          <br /> Here you can find out about the <Span>skills</Span> I have
          aquired and the <Span>projects</Span> I have been working on.
        </AboutP>
        <AboutBtnWrapper>
          <Button
            to='skills'
            onMouseEnter={() => setHover("skills")}
            onMouseLeave={() => setHover("")}
            primary='true'
            dark='true'
            big='false'
            offset={-60}
          >
            My skills {hover === "skills" ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </AboutBtnWrapper>
        <Button
          to='projects'
          onMouseEnter={() => setHover("projects")}
          onMouseLeave={() => setHover("")}
          primary='true'
          dark='true'
          big='false'
          offset={-60}
        >
          My projects {hover === "projects" ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
