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
  font-size: 1.2rem;
  color: #010606;
  display: block;
  padding-bottom: 4px;
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
width: 300px;
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
