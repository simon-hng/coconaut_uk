import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
import { WindowWidthContext } from "@context/WindowWidth";

// TODO: the clouds can be refactored into a separate component
const SingleCloudWidth = 100;
const SingleCloudImage = () => (
  <StaticImage
    src="../../images/hero/coconaut_single_cloud@1694x.png"
    alt="single cloud"
    width={SingleCloudWidth}
  />
);

const DoubleCloudWidth = 250;
const DoubleCloudImage = () => (
  <StaticImage
    src="../../images/hero/Coconaut_double_cloud@1694x.png"
    alt="double cloud"
    width={DoubleCloudWidth}
  />
);

const Clouds = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const CloudsVariants = {
  animation: { transition: { staggerChildren: 0.3 } },
};

const CloudVariants = (
  windowWidth: number,
  cloudWidth: number,
  yOffset: number,
  duration: number
) => ({
  animation: {
    x: [windowWidth + cloudWidth, -cloudWidth],
    y: yOffset,
    transition: {
      repeat: Infinity,
      duration: duration,
      ease: "linear",
    },
  },
});

export default () => {
  const windowWidth = React.useContext(WindowWidthContext);

  return (
    <Clouds>
      <motion.div variants={CloudsVariants} animate="animation">
        <motion.div
          variants={CloudVariants(windowWidth, SingleCloudWidth, 300, 15)}
          initial={false}
        >
          <SingleCloudImage />
        </motion.div>

        <motion.div
          variants={CloudVariants(windowWidth, DoubleCloudWidth, 300, 24)}
          initial={false}
        >
          <DoubleCloudImage />
        </motion.div>
      </motion.div>
    </Clouds>
  );
};
