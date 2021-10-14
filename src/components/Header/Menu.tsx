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

const menuLinks = [
  { name: 'About', to: '' },
  { name: 'Nutrition facts', to: '/#nutrition' },
  { name: 'Shop', to: '/shop' },
  { name: 'Events', to: '' },
  { name: 'Business', to: '' },
  { name: 'Sustainability', to: '' },
];

export const Menu = (prop: { isOpen: boolean }) => {
  const WindowWidth = React.useContext(WindowWidthContext);

  return (
    <div>
      <MenuStyle
        variants={menuVariants(WindowWidth)}
        animate={prop.isOpen ? 'open' : 'closed'}
        initial={false}
      >
        <ul>
          {menuLinks.map((link, i) => (
            <MenuLink key={i} to={link.to} name={link.name} />
          ))}
        </ul>
      </MenuStyle>
    </div>
  );
};
