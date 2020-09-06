import React from "react";
import logo from "../assets/peach-logo.svg";
import styled from "styled-components/macro";

const LogoImg = styled.div`
  background-image: url(${logo});
  width: 150px;
  height: 80px;
  background-repeat: no-repeat;
  margin-left: -30px;
`;

function Logo() {
  return <LogoImg />;
}

export default Logo;
