import * as React from "react";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Coconuts from "./Coconuts";

const Main = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const CanContainer = styled(motion.div)`
  position: relative;
`;

const Can = styled(motion.div)`
  position: absolute;
  top: 50px;
  left: -110px;

  @media (min-width: 900px) {
    left: -30px;
  }
`;

const CanFirst = styled(Can)`
  display: none;

  @media (min-width: 900px) {
    display: inline;
    transform: rotate(-35deg) translate(-150px, -50px);
  }
`;

const CanImage = () => (
  <StaticImage
    src="../../images/hero/Can.png"
    alt="Coconaut can"
    layout="fixed"
    width={260}
  />
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
    <CanContainer variants={CansVariants} animate="animation">
      <motion.div variants={CanVariants}>
        <CanFirst>
          <CanImage />
        </CanFirst>
      </motion.div>

      <motion.div variants={CanVariants}>
        <Can>
          <CanImage />
        </Can>
      </motion.div>

      <Coconuts />
    </CanContainer>
  </Main>
);

export default Cans;
