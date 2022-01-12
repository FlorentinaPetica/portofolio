import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to='about'>
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to='projects'>
            Projects
          </SidebarLink>
          <SidebarLink onClick={toggle} to='skills'>
            Skills
          </SidebarLink>
          <SidebarLink onClick={toggle} to='contact'>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
