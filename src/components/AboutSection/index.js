import React from "react";
import {
  AboutContainer,
  AboutBg,
  VideoBg,
  AboutContent,
  AboutH1,
  AboutP,
  AboutBtnWrapper,
  Span,
  Bold,
} from "./AboutElements";
import RandomFactsSection from "../RandomFactsSection";
import Video from "../../videos/video.mp4";

const AboutSection = () => {
  return (
    <AboutContainer id='about'>
      <AboutBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </AboutBg>
      <AboutContent>
        <AboutH1>
          <Bold>F</Bold>lorentina <Bold>P</Bold>etica
        </AboutH1>
        <AboutP>
          I am a passionate web developer, who enjoys the structure, logic and creativity that it combines.
          <br /> Here you can find out about the <Span>skills</Span> I have
          acquired and the <Span>projects</Span> I have been working on.
        </AboutP>
        <AboutBtnWrapper>
          <RandomFactsSection />
        </AboutBtnWrapper>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
