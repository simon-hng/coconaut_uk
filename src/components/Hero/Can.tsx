import * as React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

const CanImage = () => (
  <StaticImage
    src='../../images/hero/Can.png'
    alt='Coconaut can'
    layout='fixed'
    width={260}
  />
);

const canVariants = {
  animation: {
    y: [0, 50, 0],
    transition: { repeat: Infinity, duration: 5 },
  },
};

export const Can = () => (
  <motion.div variants={canVariants}>
    <CanImage />
  </motion.div>
);
