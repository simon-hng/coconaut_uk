import { Logo } from './Logo';
import { Menu } from './Menu';
import { MenuButton } from './MenuButton';
import { ShopButton } from './ShopButton';
import { motion, useCycle } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${props => props.theme.background};
`;

const InnerHeader = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 900px) {
    padding: 1.5rem 3rem;
  }
`;

const MenuButtons = styled(motion.div)`
  display: flex;
  align-items: center;
  z-index: 10;

  > a {
    cursor: pointer;
    padding: 1rem 0 1rem 1.5rem;
  }
`;

export const Header = () => {
  const [menuIsOpen, toggleMenu] = useCycle(false, true);

  const menuHandler = () => {
    toggleMenu();
  };

  return (
    <HeaderStyle>
      <InnerHeader>
        <Logo />

        <MenuButtons animate={menuIsOpen ? 'open' : 'closed'}>
          <ShopButton />
          <MenuButton menuHandler={menuHandler} />
        </MenuButtons>
      </InnerHeader>

      <Menu toggleMenu={toggleMenu} isOpen={menuIsOpen} />
    </HeaderStyle>
  );
};
