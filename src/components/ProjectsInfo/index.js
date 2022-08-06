import React, { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
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
// import image from "../../images/meal_share.gif";

const ProjectsInfo = (props) => {
  const myRef = useRef();
  const [hover, setHover] = useState(false);
  const { ...project } = props;

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <ProjectsWrapper bgDark={project.bgDark} ref={myRef}>
      <ProjectsRow imgStart={project.imgStart}>
        <Column1 imgEnd={project.imgEnd}>
          <TextWrapper>
            <Heading lightText={project.lightText}>{project.title}</Heading>
            <Subtitle>{project.subtitle}</Subtitle>
            <Description darkText={project.darkText}>
              {project.description}
            </Description>
            <SocialIconLink
              href={project.gitLink}
              target="_blank"
              aria-label="Meal-share repo"
            >
              {project.title !== "Citizens engagement" ? <FaGithub /> : null}
              <Span darkText={project.darkText}>
                {project.title === "Citizens engagement"
                  ? "Azure project"
                  : "Go to GitHub repository"}
              </Span>
            </SocialIconLink>
            <WebLink
              href={project.link}
              target="_blank"
              aria-label="Meal"
              darkText={project.darkText}
            >
              <MdOutlineWeb />
              <Span darkText={project.darkText}>Go to web app</Span>
            </WebLink>
          </TextWrapper>
        </Column1>
        <Column2 imgEnd={project.imgEnd}>
          <ImgWrap onMouseEnter={onHover} onMouseLeave={onHover}>
            <Img src={project.image} alt={project.title} />
          </ImgWrap>
        </Column2>
      </ProjectsRow>
    </ProjectsWrapper>
  );
};

export default ProjectsInfo;
