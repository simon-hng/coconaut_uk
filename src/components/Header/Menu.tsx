import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import MenuLink from './MenuLink';
import { WindowWidthContext } from '@context/WindowWidth';

const Menu = styled(motion.nav)`
  position: absolute;
  top: 0;
  padding-top: 10rem;
  width: 100%;
  height: 100vh;
  background-color: ${(prop) => prop.theme.accent};

  @media (min-width: 900px) {
    width: 500px;
  }
`;

const MenuVariants = (windowWidth: number) => ({
  open: {
    right: 0,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
      type: 'tween',
    },
  },
  closed: {
    right: windowWidth < 900 ? '-100vw' : -500,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      type: 'tween',
    },
  },
});

const menuLinks = [
  { name: 'About', to: '' },
  { name: 'Nutrition facts', to: '/#nutritionfacts' },
  { name: 'Shop', to: '' },
  { name: 'Events', to: '' },
  { name: 'Business', to: '' },
  { name: 'Sustainability', to: '' },
];

export default (prop: { isOpen: boolean }) => {
  const WindowWidth = React.useContext(WindowWidthContext);

  return (
    <div>
      <Menu
        variants={MenuVariants(WindowWidth)}
        animate={prop.isOpen ? 'open' : 'closed'}
        initial={false}
      >
        <motion.ul>
          {menuLinks.map((link) => (
            <MenuLink to={link.to} name={link.name} />
          ))}
        </motion.ul>
      </Menu>
    </div>
  );
};
