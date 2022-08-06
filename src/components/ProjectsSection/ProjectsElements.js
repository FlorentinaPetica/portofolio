import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bolder;
  color: #fff;
  background-color: #010606;
  padding-top: 50px;
  padding-bottom: 25px;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
