import React from "react"
import styled from "styled-components"
import hero from "../assets/hero1.svg";
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { breakpoints } from '../components/Breakpoints';
import { Link } from 'gatsby';
import TextLoop from "react-text-loop";

const HeroImage = styled.div`
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 240, 235, 0.8), rgba(246, 176, 152, 0.2)), url(${hero});

  @media (max-width: ${breakpoints.mobileMax}) {
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 240, 235, 0.8), rgba(246, 176, 152, 0.2)), url(${hero});
  }
`;

const StyledTextLoop = styled.span`
  background:
  linear-gradient(
    to bottom, #bfb8ca 0%,
    #bfb8ca 100%
  );
  background-position: 0 85%;
  background-repeat: repeat-x;
  background-size: 4px 18%;
  z-index: 0;
`;

const HeroComponent = () => (
<section id="header">
    <HeroImage>
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2 pt-20 md:pt-40 pb-40">
          <Heading className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            We&nbsp;
            <TextLoop mask={true} className="pb-2">
              <StyledTextLoop> design </StyledTextLoop>
              <StyledTextLoop> develop </StyledTextLoop>
              <StyledTextLoop> create </StyledTextLoop>
            </TextLoop>
            <br/>beautiful websites.
          </Heading>
          <Paragraph className="text-xl lg:text-2xl mt-6 font-light">
          HANK development is a team of four women developers based in West Lafayette, IN. We strive to create seamless digital experiences through creativity and strategy.
          </Paragraph>
          <Paragraph className="mt-8 md:mt-12">
            <Button size="lg"><Link to="#services" style={{backgroundSize: "0", color: "#393939"}}>Learn More</Link></Button>
          </Paragraph>
        </div>
      </div>
      </HeroImage>
</section>
);

export default HeroComponent;