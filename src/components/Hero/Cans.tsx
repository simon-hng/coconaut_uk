import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Can from "./Can";
import Coconut from "./Coconut";

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimationContainer = styled(motion.div)`
  position: relative;
  top: 50px;
  height: 600px;
`;

const CanMain = styled.div`
  position: absolute;
  left: -110px;
  transform: rotate(-7deg);

  @media (min-width: 900px) {
    left: -30px;
    transform: rotate(0);
    z-index: 10;
  }
`;

const CanSub = styled(CanMain)`
  display: none;

  @media (min-width: 900px) {
    display: inline;
    transform: rotate(-35deg) translate(-150px, -50px);
  }
`;

const CoconutLeft = styled.div`
  position: absolute;
  top: 430px;
  left: -130px;

  @media (min-width: 900px) {
    left: -200px;
  }
`;

const CoconutRight = styled(CoconutLeft)`
  left: 30px;

  @media (min-width: 900px) {
    left: 130px;
  }
`;

const CansVariants = {
  animation: { transition: { staggerChildren: 0.5 } },
};

const Cans = () => (
  <Main>
    <AnimationContainer variants={CansVariants} animate="animation">
      <CanSub>
        <Can />
      </CanSub>

      <CanMain>
        <Can />
      </CanMain>

      <CoconutLeft>
        <Coconut isLeft />
      </CoconutLeft>

      <CoconutRight>
        <Coconut />
      </CoconutRight>
    </AnimationContainer>
  </Main>
);

export default Cans;
