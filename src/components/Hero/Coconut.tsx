import * as React from 'react';
import { motion, Variants } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

const CoconutVariant: Variants = {
  animation: {
    rotate: [0, 0, -15, 15],
    transition: {
      repeat: Infinity,
      duration: 1,
      repeatType: 'reverse',
      times: [0, 0.6, 0.8, 1],
    },
  },
};

interface CoconutProps {
  isLeft?: boolean;
}

export default (props: CoconutProps) => {
  return props.isLeft ? (
    <motion.div variants={CoconutVariant}>
      <StaticImage
        src={'../../images/hero/Coconaut_coconut_02.png'}
        alt='coconut left'
        width={120}
        layout='fixed'
      />
    </motion.div>
  ) : (
    <motion.div variants={CoconutVariant}>
      <StaticImage
        src={'../../images/hero/Coconaut_coconut_01.png'}
        alt='coconut right'
        width={100}
        layout='fixed'
      />
    </motion.div>
  );
};
