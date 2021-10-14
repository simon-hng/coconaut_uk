import * as React from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import { WindowWidthContext } from '@context/WindowWidth';
import { Logo } from './Logo';
import { Menu } from './Menu';

const HeaderStyle = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
`;

const InnerHeader = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

const MenuButtons = styled(motion.div)`
  display: flex;
  align-items: center;
  z-index: 10;

  > a {
    cursor: pointer;
    padding-left: 1.5rem;
  }
`;

export const Header = () => {
  const [menuIsOpen, toggleMenu] = useCycle(false, true);
  const windowWidth = React.useContext(WindowWidthContext);

  return (
    <HeaderStyle>
      <InnerHeader>
        <Logo windowWidth={windowWidth} />

        <MenuButtons>
          <Link to=''>
            <StaticImage src='../../images/einkaufswagen.svg' height={40} />
          </Link>

          <a onClick={() => toggleMenu()}>
            <StaticImage src='../../images/menubutton.svg' height={30} />
          </a>
        </MenuButtons>
      </InnerHeader>

      <Menu isOpen={menuIsOpen} />
    </HeaderStyle>
  );
};
