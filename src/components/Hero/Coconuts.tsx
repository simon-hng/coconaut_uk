import * as React from "react";
import { motion, Variants } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const CoconutsContainer = styled(motion.div)`
  position: absolute;
  left: -160px; // Centering by moving to the left by width/2
  top: 480px;
  width: 280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 900px) {
    left: -200px;
    width: 400px;
  }
`;

const CoconutsVariant: Variants = {
  animation: { transition: { staggerChildren: 0.25 } },
};

const CoconutVariant: Variants = {
  animation: {
    rotate: [0, 0, -15, 15],
    transition: {
      repeat: Infinity,
      duration: 1,
      repeatType: "reverse",
      times: [0, 0.6, 0.8, 1],
    },
  },
};

const Coconuts = () => (
  <CoconutsContainer variants={CoconutsVariant} animate="animation">
    <motion.div variants={CoconutVariant}>
      <StaticImage
        src={"../../images/hero/Coconaut_coconut_02.png"}
        alt="coconut"
        width={120}
      />
    </motion.div>
    <motion.div variants={CoconutVariant}>
      <StaticImage
        src={"../../images/hero/Coconaut_coconut_01.png"}
        alt="coconut"
        width={100}
      />
    </motion.div>
  </CoconutsContainer>
);

export default Coconuts;
