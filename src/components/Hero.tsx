import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import BackgroundImage from "../images/hero/Coconaut_Skyline@1694x-100.jpg";

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: 5%;
`;

const Cans = styled.div`
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
`;

const CanFirst = styled(Can)`
  transform: rotate(-25deg);
`;

const CanSecond = styled(Can)`
  transform: rotate(10deg);
`;

const CansVariants = {
  animation: { transition: { staggerChildren: 0.08 } },
};

const CanVariants = {
  animation: {
    y: [0, 50, 0],
    transition: {
      repeat: Infinity,
      duration: 3,
    },
  },
};

const Hero = () => {
  return (
    <Wrapper>
      <Cans>
        <motion.div variants={CansVariants}>
          <motion.div variants={CanVariants} animate="animation">
            <CanFirst>
              <StaticImage
                src="../images/hero/Can.png"
                alt="Coconaut can"
                layout="fixed"
              />
            </CanFirst>
          </motion.div>

          <motion.div variants={CanVariants} animate="animation">
            <CanSecond>
              <StaticImage
                src="../images/hero/Can.png"
                alt="Coconaut can"
                layout="fixed"
              />
            </CanSecond>
          </motion.div>
        </motion.div>
      </Cans>
    </Wrapper>
  );
};

export default Hero;
