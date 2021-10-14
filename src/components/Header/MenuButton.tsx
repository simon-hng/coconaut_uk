import { motion } from 'framer-motion';
import * as React from 'react';
import { withTheme } from 'styled-components';

const bar = {
  open: {
    stroke: '#fff',
    strokeWidth: 4,
  },
  closed: {
    stroke: '#747474',
    strokeWidth: 4,
  },
};

const topBar = {
  open: {
    ...bar.open,
    x: 45,
    x2: '45',
  },
  closed: {
    ...bar.closed,
    x2: '90',
  },
};

const middleBar = {
  open: {
    ...bar.open,
    y: 22,
    x2: '90',
  },
  closed: {
    ...bar.closed,
    y: 22,
    x2: '90',
  },
};

const lowBar = {
  open: {
    ...bar.open,
    x: 45,
    y: 42,
    x2: '45',
  },
  closed: {
    ...bar.closed,
    y: 42,
    x2: '45',
  },
};

export const MenuButton = ({ menuHandler }) => (
  <a onClick={menuHandler}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='30'
      viewBox='0 0 90 44'
    >
      <motion.line variants={topBar} />
      <motion.line variants={middleBar} />
      <motion.line variants={lowBar} />
    </svg>
  </a>
);
