import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

export const NabBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                to="about"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                to="discover"
              >
                Discover
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                to="services"
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                to="signup"
              >
                Sign Up
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NabBar;
