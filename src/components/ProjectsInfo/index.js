import React, { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { useInViewport } from "react-in-viewport";
import {
  ProjectsWrapper,
  ProjectsRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  Description,
  Span,
  SocialIconLink,
  WebLink,
  ImgWrap,
  Img,
} from "./ProjectsInfoElements";
import image from "../../images/meal_share.gif";

const ProjectsInfo = (props) => {
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef, props);
  const [hover, setHover] = useState(false);
  const { ...projects } = props;

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <ProjectsWrapper bgDark={projects.bgDark} ref={myRef}>
      {inViewport && (
        <ProjectsRow imgStart={projects.imgStart}>
          <Column1 imgEnd={projects.imgEnd}>
            <TextWrapper>
              <Heading lightText={projects.lightText}>{projects.title}</Heading>
              <Subtitle>{projects.subtitle}</Subtitle>
              <Description darkText={projects.darkText}>
                {projects.description}
              </Description>
              <SocialIconLink
                href={projects.gitLink}
                target='_blank'
                aria-label='Meal-share repo'
              >
                <FaGithub />
                <Span darkText={projects.darkText}>
                  Go to GitHub repository
                </Span>
              </SocialIconLink>
              <WebLink
                href={projects.link}
                target='_blank'
                aria-label='Meal'
                darkText={projects.darkText}
              >
                <MdOutlineWeb />
                <Span darkText={projects.darkText}>Go to app</Span>
              </WebLink>
            </TextWrapper>
          </Column1>
          <Column2 imgEnd={projects.imgEnd}>
            <ImgWrap onMouseEnter={onHover} onMouseLeave={onHover}>
              <Img src={image} alt={projects.title} />
            </ImgWrap>
          </Column2>
        </ProjectsRow>
      )}
    </ProjectsWrapper>
  );
};

export default ProjectsInfo;
