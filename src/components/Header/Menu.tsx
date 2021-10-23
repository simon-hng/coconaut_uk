import { MenuLink } from './MenuLink';
import { WindowWidthContext } from '@context/WindowWidth';
import { motion } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';

const MenuStyle = styled(motion.nav)`
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

const Background = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
`;

const menuVariants = (windowWidth: number) => ({
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

const backgroundVariants = {
  open: {
    opacity: 1,
    display: 'flex',
  },
  closed: {
    opacity: 0,
    display: 'none',
  },
};

const menuLinks = [
  { name: 'Nutrition facts', to: '/#nutrition' },
  { name: 'Shop', to: '/#shop' },
  { name: 'Discover', to: '/#discover' },
  { name: 'Our Mission', to: '/#mission' },
  { name: 'Sustainability', to: '/#sustainability' },
];

interface menuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const Menu = ({ isOpen, toggleMenu: toggleMenu }: menuProps) => {
  const WindowWidth = React.useContext(WindowWidthContext);

  return (
    <motion.div animate={isOpen ? 'open' : 'closed'}>
      <MenuStyle variants={menuVariants(WindowWidth)} initial={false}>
        <ul>
          {menuLinks.map((link, i) => (
            <MenuLink
              key={i}
              hideMenu={toggleMenu}
              to={link.to}
              name={link.name}
            />
          ))}
        </ul>
      </MenuStyle>
      <Background variants={backgroundVariants} />
    </motion.div>
  );
};
