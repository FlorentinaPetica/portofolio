import React from "react";
import Icon1 from "../../images/html5.png";
import Icon2 from "../../images/css3.png";
import Icon3 from "../../images/JS.png";
import Icon4 from "../../images/mysql.png";
import Icon5 from "../../images/nodejs.png";
import Icon6 from "../../images/react.png";
import Icon7 from "../../images/vsc.png";
import Icon8 from "../../images/git.png";
import Icon9 from "../../images/postman.png";
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsCard,
  SkillsIcon,
  SkillsH1,
  SkillsH2,
} from "./SkillsElements";

const SkillsSection = () => {
  return (
    <SkillsContainer id='skills'>
      <SkillsH1>Skills</SkillsH1>
      <SkillsH2>Languages/Frameworks</SkillsH2>
      <SkillsWrapper>
        <SkillsCard>
          <SkillsIcon src={Icon1} />
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon2} />
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon3} />
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon4} />
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon5} />
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon6} />
        </SkillsCard>
      </SkillsWrapper>
      <SkillsH2>Tools</SkillsH2>
      <SkillsWrapper>
        <SkillsCard>
          <SkillsIcon src={Icon7} />
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon8} />
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon9} />
        </SkillsCard>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default SkillsSection;
