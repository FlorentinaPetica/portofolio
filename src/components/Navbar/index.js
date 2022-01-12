import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLink,
  NavItem,
  NavRoute,
  Bars,
  NavMenu,
  LogoName,
  Span,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 60) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavRoute to='/'>
            <LogoName onClick={toggleHome}>
              <Span>F</Span>lorentina <Span>P</Span>etica
            </LogoName>
          </NavRoute>
          <Bars onClick={toggle} />
          <NavMenu>
            <NavItem>
              <NavLink
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-60}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='projects'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-60}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='skills'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-60}
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-60}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
