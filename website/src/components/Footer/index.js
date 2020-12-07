import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="about">How it works</FooterLink>
                <FooterLink to="about">Testimonials</FooterLink>
                <FooterLink to="about">Careers</FooterLink>
                <FooterLink to="about">Investors</FooterLink>
                <FooterLink to="about">Tearms of Service</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="about">How it works</FooterLink>
                <FooterLink to="about">Testimonials</FooterLink>
                <FooterLink to="about">Careers</FooterLink>
                <FooterLink to="about">Investors</FooterLink>
                <FooterLink to="about">Tearms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>

            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="about">How it works</FooterLink>
                <FooterLink to="about">Testimonials</FooterLink>
                <FooterLink to="about">Careers</FooterLink>
                <FooterLink to="about">Investors</FooterLink>
                <FooterLink to="about">Tearms of Service</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="about">How it works</FooterLink>
                <FooterLink to="about">Testimonials</FooterLink>
                <FooterLink to="about">Careers</FooterLink>
                <FooterLink to="about">Investors</FooterLink>
                <FooterLink to="about">Tearms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
          </FooterLinksContainer>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
