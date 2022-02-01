import styled from "styled-components";

export const SkillsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding-bottom: 50px;

  @media screen and (max-width: 780px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const SkillsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
`;

export const SkillsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 150px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SkillsIcon = styled.img`
  max-height: 55px;
  /* max-width: 100px; */
  margin-bottom: 10px;
`;

export const SkillsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SkillsH2 = styled.h2`
  font-size: 1.2em;
  color: #fff;
  margin-bottom: 50px;
  margin-top: 50px;
  margin-inline: 15%;
`;
