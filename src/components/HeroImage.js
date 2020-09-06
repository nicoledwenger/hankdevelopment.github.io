import React from "react";
import hero from "../assets/hero1.svg";
import styled from "styled-components/macro";

const HeroImage = styled.div`
  background-image: url(${hero});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

function HeroImg() {
  return <HeroImage />;
}

export default HeroImg;
