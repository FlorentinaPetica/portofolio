import React from "react";
import ProjectsInfo from "../ProjectsInfo";
import { projects } from "./Data.js";
import { ProjectsContainer, ProjectsH1 } from "./ProjectsElements";

const ProjectsSection = () => {
  return (
    <>
      <ProjectsContainer id='projects'>
        <ProjectsH1>My Projects</ProjectsH1>
        {projects.map((project, index) => (
          <ProjectsInfo key={index} {...project} />
        ))}
      </ProjectsContainer>
    </>
  );
};

export default ProjectsSection;
