import * as React from 'react';
import { motion } from 'framer-motion';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import styled from 'styled-components';

const MenuLinkStyle = styled(motion.li)`
  padding: 1.5rem 5rem;
`;

const MenuLinkInner = styled(AnchorLink)`
  color: ${(prop) => prop.theme.background};
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
`;

const MenuLinkVariants = {
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

export const MenuLink = (props: { to: string; name: string }) => (
  <MenuLinkStyle
    variants={MenuLinkVariants}
    whileHover={{ scale: 1.2 }}
    transition={{ duration: 0.5 }}
    style={{ originX: 0 }}
  >
    <MenuLinkInner to={props.to}>{props.name}</MenuLinkInner>
  </MenuLinkStyle>
);
