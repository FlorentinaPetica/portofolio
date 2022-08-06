import React, { useState, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import TypeWriter from "typewriter-effect";
import cv from "../../documents/CV Florentina Petica.pdf";

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

  return (
    <ContactContainer id="contact" ref={myRef}>
      <ContactH1>
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
      </ContactH1>
      <ContactWrapper>
        <ContactCard />
        <SocialMediaWrap>
          <>
            <SocialIcons
              onMouseEnter={() => setHover("linkedin")}
              onMouseLeave={() => setHover("")}
            >
              <SocialIconLink
                href="https://www.linkedin.com/in/florentina-petica-161286166/"
                target="_blank"
                aria-label="Linkedin"
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
                href="https://github.com/FlorentinaPetica"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialIconLink>
              {hover === "github" ? <Span>View my Github profile</Span> : null}
            </SocialIcons>
            <ButtonMailTo
              href={`mailto:${`florentina.petica@gmail.com`}?subject=${
                "" || ""
              }&body=${"Hej Florentina" || ""}`}
              aria-label="Email"
              onMouseEnter={() => setHover("mailto")}
              onMouseLeave={() => setHover("")}
            >
              <FiMail />
              {hover === "mailto" ? (
                <Span>Happy to receive a feedback! </Span>
              ) : null}
            </ButtonMailTo>
          </>

          <Button
            href={cv}
            download
            secondary="true"
            light="true"
            big="false"
            target="_blank"
            aria-label="CV"
            offset={-60}
          >
            Download CV
          </Button>
        </SocialMediaWrap>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactSection;
