import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  ImgWrapper,
  Img,
} from "./InfoElements";
import { Button } from "../ButtonElement";

const InfoSection = ({
  id,
  lightBg,
  lightText,
  topLine,
  headlline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  dark,
  primary,
  darkText,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headlline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrapper>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    dark={dark}
                    primary={primary}
                    to="home"
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
