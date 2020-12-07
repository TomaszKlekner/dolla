import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtn,
  SidebarBtnLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon isOpen={isOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtn>
          <SidebarBtnLink to="/sign-in" onClick={toggle}>
            Sign In
          </SidebarBtnLink>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
