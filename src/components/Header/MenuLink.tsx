import * as React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MenuLinkStyle = styled(motion.li)`
  padding: 1rem 5rem;
`;

const MenuLinkWrapper = styled(AnchorLink)`
  color: ${(prop) => prop.theme.background};
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: bold;
`;

const menuLinkVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

interface menuLinkProps {
  to: string;
  name: string;
}

export const MenuLink = ({ to, name }: menuLinkProps) => (
  <MenuLinkWrapper to={to}>
    <MenuLinkStyle
      variants={menuLinkVariants}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.2 }}
      style={{ originX: 0 }}
    >
      {name}
    </MenuLinkStyle>
  </MenuLinkWrapper>
);
