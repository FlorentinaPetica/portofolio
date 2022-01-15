import React, { useState, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
// import { Button } from "../ButtonElements";
import { useInViewport } from "react-in-viewport";
import TypeWriter from "typewriter-effect";

import {
  ContactContainer,
  ContactWrapper,
  ContactCard,
  ContactH1,
  Span,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  ButtonMailTo,
  Button,
} from "./ContactElements";

const ContactSection = (props) => {
  const [hover, setHover] = useState("");
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef, props);

  return (
    <ContactContainer id='contact' ref={myRef}>
      <ContactH1>
        {inViewport && (
          <TypeWriter
            style={{ fontFamily: "Major Mono Display" }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Get in contact")
                .pauseFor(1000)
                .typeString("...")
                .start();
            }}
          />
        )}
      </ContactH1>
      <ContactWrapper>
        <ContactCard />
        <SocialMediaWrap>
          {inViewport ? (
            <>
              <SocialIcons
                onMouseEnter={() => setHover("linkedin")}
                onMouseLeave={() => setHover("")}
              >
                <SocialIconLink
                  href='https://www.linkedin.com/in/florentina-petica-161286166/'
                  target='_blank'
                  aria-label='Linkedin'
                >
                  <FaLinkedin />
                </SocialIconLink>
                {hover === "linkedin" ? (
                  <Span>View my Linkedin profile</Span>
                ) : null}
              </SocialIcons>
              <SocialIcons
                onMouseEnter={() => setHover("github")}
                onMouseLeave={() => setHover("")}
              >
                <SocialIconLink
                  href='https://github.com/FlorentinaPetica'
                  target='_blank'
                  aria-label='GitHub'
                >
                  <FaGithub />
                </SocialIconLink>
                {hover === "github" ? (
                  <Span>View my Github profile</Span>
                ) : null}
              </SocialIcons>
              <ButtonMailTo
                href={`mailto:${`florentina.petica@gmail.com`}?subject=${
                  "" || ""
                }&body=${"Hej Florentina" || ""}`}
                aria-label='Email'
                onMouseEnter={() => setHover("mailto")}
                onMouseLeave={() => setHover("")}
              >
                <FiMail />
                {hover === "mailto" ? (
                  <Span>Happy to receive a feedback! </Span>
                ) : null}
              </ButtonMailTo>
            </>
          ) : (
            ""
          )}
          <Button
            href='https://docs.google.com/presentation/d/1c0yqIS9WHJRKgDBtRoooJ_Gkq-mL_viJoB_xjutZwa8/edit#slide=id.ga632a4d4e1_0_96'
            secondary='true'
            light='true'
            big='false'
            target='_blank'
            aria-label='CV'
            offset={-60}
          >
            View CV
          </Button>
        </SocialMediaWrap>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactSection;
