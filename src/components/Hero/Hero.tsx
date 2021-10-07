import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import BackgroundImage from "../../images/hero/Coconaut_Skyline@1694x-100.jpg";
import Cans from "./Cans";

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: -20px;
  background-size: 2000px;
`;

const Hero = () => {
  return (
    <Wrapper>
      <h1>GoHigher!</h1>
      <Cans />
    </Wrapper>
  );
};

export default Hero;
