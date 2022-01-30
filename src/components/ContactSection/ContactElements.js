import myImage from "../../images/photo1.png";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
        from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
`;

export const ContactContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 780px) {
    height: 1000px;
  }
`;

export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;
  
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  `;

export const Span = styled.span`
  font-size: 1rem;
  color: #010606;
  display: block;
  padding-bottom: 5px;
  padding-left: 5px;


  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ContactWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  `;

export const ContactCard = styled.div`
  background-size: cover;
  background-image: url(${myImage});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 340px;
  width: 360px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  
  @media screen and (max-width: 480px) {
    height: 260px;
    width: 280px;
  }
  `;

export const SocialMediaWrap = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
border-radius: 10px;
height: 340px;
width: 360px;
padding-inline: 30px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.2s ease-in-out;

@media screen and (max-width: 480px) {
  height: 260px;
  width: 280px;
}
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  `;

export const SocialIcons = styled.div`
display: flex;
animation: ${slideIn} 2500ms;
align-items: center;
`;

export const SocialIconLink = styled.a`
  color: #15cdfc;
  font-size: 36px;
  `;

export const ButtonMailTo = styled.a`
color: #15cdfc;
font-size: 36px;
text-decoration: none;
animation: ${slideIn} 2500ms;
`;

export const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#2eb9db" : "#010606")};
  background: ${({ secondary }) => (secondary ? "#010606" : "#2eb9db")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 35px" : "12px 25px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  color: ${({ light }) => (light ? "#fff" : "#010606")};
  font-size: ${({ fontBig }) => (fontBig ? "1.5rem" : "1.2rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: 25px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#2eb9db")};
  }
`;
