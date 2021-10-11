import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Can from "./Can";
import Coconuts from "./Coconuts";

const Main = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const AnimationContainer = styled(motion.div)`
  position: relative;
`;

const CanSecond = styled(motion.div)`
  position: absolute;
  top: 50px;
  left: -110px;

  @media (min-width: 900px) {
    left: -30px;
  }
`;

const CanFirst = styled(CanSecond)`
  display: none;

  @media (min-width: 900px) {
    display: inline;
    transform: rotate(-35deg) translate(-150px, -50px);
  }
`;

const CansVariants = {
  animation: { transition: { staggerChildren: 0.5 } },
};

const Cans = () => (
  <Main>
    <AnimationContainer variants={CansVariants} animate="animation">
      <CanFirst>
        <Can />
      </CanFirst>

      <CanSecond>
        <Can />
      </CanSecond>

      <Coconuts />
    </AnimationContainer>
  </Main>
);

export default Cans;
