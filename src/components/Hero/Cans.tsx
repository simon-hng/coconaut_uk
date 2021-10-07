import * as React from "react";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  max-width: 100vw;

  > div {
    position: relative;
  }
`;

const Can = styled(motion.div)`
  position: absolute;
  top: -200px;
  left: -100px;

  @media (min-width: 900px) {
    left: -50px;
  }
`;

const CanFirst = styled(Can)`
  display: none;

  @media (min-width: 900px) {
    display: inline;
    transform: rotate(-25deg) translate(-150px, -50px);
  }
`;

const CanSecond = styled(Can)`
  transform: rotate(10deg);
`;

const CanImage = () => (
  <StaticImage src="../images/hero/Can.png" alt="Coconaut can" layout="fixed" />
);

const CansVariants = {
  animation: { transition: { staggerChildren: 0.5 } },
};

const CanVariants = {
  animation: {
    y: [0, 50, 0],
    transition: { repeat: Infinity, duration: 5 },
  },
};

const Cans = () => (
  <Main>
    <motion.div variants={CansVariants} animate="animation">
      <motion.div variants={CanVariants}>
        <CanFirst>
          <CanImage />
        </CanFirst>
      </motion.div>

      <motion.div variants={CanVariants}>
        <CanSecond>
          <CanImage />
        </CanSecond>
      </motion.div>
    </motion.div>
  </Main>
);

export default Cans;
