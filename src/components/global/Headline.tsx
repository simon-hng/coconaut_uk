import * as React from "react";
import styled from "styled-components";
import { darken } from "polished";

interface HeadlineProps {
  main: String;
  sub?: String;
}

const Main = styled.h2`
	padding: 0.8em 0;
  color: ${(props) => props.theme.accent};
`;
const Sub = styled.span`
  color: ${(props) => darken(0.2, props.theme.accent)};
`;

const Headline = (props: HeadlineProps) => (
  <Main>
    {props.main}
    <br />
    {props.sub && <Sub>{props.sub}</Sub>}
  </Main>
);

export default Headline;
