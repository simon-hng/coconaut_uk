import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import BackgroundImage from "../../images/hero/Coconaut_Skyline@1694x-100.jpg";
import Cans from "./Cans";

const Wrapper = styled.div`
  height: 90vh;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: -20px;
  background-size: 1980px;
`;

const Caption = styled.h1`
  margin-top: 10vh;
  text-align: center;
  font-family: "HermesBold";
  color: ${(props) => props.theme.accentLight};
`;

const Hero = () => {
  return (
    <Wrapper>
      <Caption>GoHigher!</Caption>
      <Cans />
    </Wrapper>
  );
};

export default Hero;
