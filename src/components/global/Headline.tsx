import * as React from "react";
import styled from "styled-components";
import { darken } from "polished";

interface HeadlineProps {
  main: String;
  sub?: String;
}

const Main = styled.h2`
  padding-bottom: 0.8em;
  color: ${(props) => props.theme.accent};
`;
const Sub = styled.span`
  color: ${(props) => props.theme.accentDark};
`;

const Headline = (props: HeadlineProps) => (
  <Main>
    {props.main}
    <br />
    {props.sub && <Sub>{props.sub}</Sub>}
  </Main>
);

export default Headline;
