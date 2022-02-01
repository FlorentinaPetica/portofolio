import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
`

const slideInRight = keyframes`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
`

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 450px;
  background-color: ${({ bgDark }) => (bgDark ? "#010606" : "#fff")};

  @media screen and (max-width: 768px) {
    height: 900px;
  }
`;

export const ProjectsRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column1 = styled.div`
  margin: 15px 15px;
  padding: 0 15px;
  flex: 1;
  animation: ${({imgEnd}) => (imgEnd ? slideInRight : slideInLeft)};
  animation-duration: 1500ms;
  `;

export const Column2 = styled.div`
  margin: 15px 15px;
  padding: 0 15px;
  flex: 1;
  animation: ${({imgEnd}) => (imgEnd ? slideInLeft : slideInRight)};
  animation-duration: 1500ms;
`;

export const TextWrapper = styled.div`
  align-content: flex-start;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 1.5rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#d8dce4" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Subtitle = styled.p`
  color: #15cdfc;
  font-size: 1;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.2rem;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Span = styled.p`
  color: #15cdfc;
  font-size: 1.2rem;
  padding-left: 5px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SocialIconLink = styled.a`
  color: #15cdfc;
  font-size: 28px;
  display: flex;
  align-items: center;
`;

export const WebLink = styled.a`
  color: #15cdfc;
  font-size: 28px;
  display: flex;
  align-items: center;
  padding-top: 10px;
`;

export const ImgWrap = styled.div`
  max-width: 450px;
  height: 100%;
`;

export const Img = styled.img`
  width: 95%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
