import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import MenuLink from './MenuLink';

const Menu = styled(motion.nav)`
  position: absolute;
  top: 0;
  padding-top: 10rem;
  width: 500px;
  height: 100vh;
  background-color: ${(prop) => prop.theme.accent};
`;

const MenuVariants = {
  open: {
    right: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    right: -500,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const menuLinks = [
  { name: 'About', to: '' },
  { name: 'Nutrition facts', to: '/#nutritionfacts' },
  { name: 'Shop', to: '' },
  { name: 'Events', to: '' },
  { name: 'Business', to: '' },
  { name: 'Sustainability', to: '' },
];

export default (prop: { isOpen: boolean }) => {
  return (
    <Menu variants={MenuVariants} animate={prop.isOpen ? 'open' : 'closed'}>
      <motion.ul>
        {menuLinks.map((link) => (
          <MenuLink to={link.to} name={link.name} />
        ))}
      </motion.ul>
    </Menu>
  );
};
