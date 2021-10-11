import * as React from "react";
import styled from "styled-components";
import MenuLink, { MenuLinkInner } from "./MenuLink";

const Main = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10rem 0 0 4rem;
  width: 30rem;
  height: 100vh;
  background-color: ${(prop) => prop.theme.accent};
`;

const menuLinks = [
  { name: "About", to: "" },
  { name: "Nutrition facts", to: "/#nutritionfacts" },
  { name: "Shop", to: "" },
  { name: "Events", to: "" },
  { name: "Business", to: "" },
  { name: "Sustainability", to: "" },
];

const Menu = (prop: { isOpen: boolean }) => {
  return (
    prop.isOpen && (
      <Main>
        <ul>
          {menuLinks.map((link) => (
            <MenuLink to={link.to} name={link.name} />
          ))}
        </ul>
      </Main>
    )
  );
};

export default Menu;
