import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SidebarMenu";
// import ProjectsSection from "../components/ProjectsSection";
// import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
// import ContactSection from "../components/ContactSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <AboutSection />
      {/* <ProjectsSection /> */}
      {/* <SkillsSection /> */}
      {/* <ContactSection /> */}
      <Footer />
    </>
  );
};

export default Home;
