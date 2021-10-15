import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { WindowWidthContext } from '@context/WindowWidth';

// TODO: the clouds can be refactored into a separate component
const singleCloudWidth = 100;
const SingleCloudImage = () => (
  <StaticImage
    src='../../images/hero/coconaut_single_cloud@1694x.png'
    alt='single cloud'
    width={singleCloudWidth}
  />
);

const doubleCloudWidth = 250;
const DoubleCloudImage = () => (
  <StaticImage
    src='../../images/hero/Coconaut_double_cloud@1694x.png'
    alt='double cloud'
    width={doubleCloudWidth}
  />
);

const CloudsStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const cloudsVariants = {
  animation: { transition: { staggerChildren: 0.3 } },
};

const cloudVariants = (
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
      ease: 'linear',
    },
  },
});

export const Clouds = () => {
  const windowWidth = React.useContext(WindowWidthContext);

  return (
    <CloudsStyle>
      <motion.div variants={cloudsVariants} animate='animation'>
        <motion.div
          variants={cloudVariants(windowWidth, singleCloudWidth, 300, 15)}
          initial={false}
        >
          <SingleCloudImage />
        </motion.div>

        <motion.div
          variants={cloudVariants(windowWidth, doubleCloudWidth, 300, 24)}
          initial={false}
        >
          <DoubleCloudImage />
        </motion.div>
      </motion.div>
    </CloudsStyle>
  );
};
