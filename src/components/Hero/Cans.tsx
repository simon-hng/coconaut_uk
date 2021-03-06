import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Can } from './Can';
import { Coconut } from './Coconut';

const CansStyle = styled.div`
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
  top: 100px;
  height: 600px;
`;

const CanMain = styled.div`
  position: absolute;
  left: -70px;
  transform: rotate(8deg);

  @media (min-width: 900px) {
    left: 0;
    transform: rotate(12deg);
    z-index: 10;
  }
`;

const CanSub = styled(CanMain)`
  display: none;

  @media (min-width: 900px) {
    display: inline;
    transform: rotate(-23deg) translate(-150px, -50px);
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

const cansVariants = {
  animation: { transition: { staggerChildren: 0.5 } },
};

export const Cans = () => (
  <CansStyle>
    <AnimationContainer variants={cansVariants} animate='animation'>
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
  </CansStyle>
);
