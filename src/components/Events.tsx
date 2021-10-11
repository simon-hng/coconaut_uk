import * as React from "react";
import styled from "styled-components";

import { Headline } from "@components/global";
import BackgroundImage from "@images/hero/Coconaut_Skyline@1694x-100.jpg";

const Background = styled.section`
  width: 100vh;
  background-image: url(${BackgroundImage});
`;

const Events = (): JSX.Element => {
  return (
    <>
      <Headline main="Join Our Events" centered />
      <Background>
      </Background>
    </>
  );
};

export default Events;
