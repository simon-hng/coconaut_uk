import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";

const SingleCloudImage = () => (
  <StaticImage
    src="../../images/hero/coconaut_single_cloud@1694x.png"
    alt="single cloud"
    width={100}
  />
);

const DoubleCloudImage = () => (
  <StaticImage
    src="../../images/hero/Coconaut_double_cloud@1694x.png"
    alt="double cloud"
    width={500}
  />
);

const Main = styled.div`
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

const Clouds = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setWindowWidth(window.innerWidth);
        console.log(window.innerWidth);
      },
      false
    );
  }, []);

  return (
    <Main>
      <motion.div variants={CloudsVariants} animate="animation">
        <motion.div
          variants={CloudVariants(windowWidth, 100, 200, 15)}
          initial={false}
        >
          <SingleCloudImage />
        </motion.div>

        <motion.div
          variants={CloudVariants(windowWidth, 500, 300, 24)}
          initial={false}
        >
          <DoubleCloudImage />
        </motion.div>
      </motion.div>
    </Main>
  );
};

export default Clouds;
