import * as React from "react";
import styled from "styled-components";
import { useCycle } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

import { WindowWidthContext } from "@context/WindowWidth";
import MenuIcon from "@images/menubutton.svg";

const Main = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem;
`;

const Header = () => {
  const [menuIsOpen, toggleMenu] = useCycle(false, true);
  const windowWidth = React.useContext(WindowWidthContext);

  return (
    <Main>
      {windowWidth < 900 ? (
        <StaticImage src="../../images/logoMobile.svg" />
      ) : (
        <StaticImage src="../../images/logoDesktop.svg" width={200} />
      )}
    </Main>
  );
};

export default Header;
