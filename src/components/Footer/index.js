import React from "react";
import { FooterContainer, Development, WebsiteRights, Year } from "./FooterElements";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <Development>Developed by Florentina Petica</Development>
      <WebsiteRights>
        <FaCopyright />
        <Year>{new Date().getFullYear()}</Year>
      </WebsiteRights>
    </FooterContainer>
  );
};

export default Footer;
