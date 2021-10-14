import * as React from 'react';
import styled from 'styled-components';

interface HeadlineProps {
  main: String;
  sub?: String;
  centered?: boolean;
}

interface MainProps {
  centered: boolean;
}

const HeadlineStyle = styled.h2<MainProps>`
  padding-bottom: 0.8em;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  color: ${(props) => props.theme.accent};
`;
const Sub = styled.span`
  color: ${(props) => props.theme.accentDark};
`;

export const Headline = (props: HeadlineProps) => (
  <HeadlineStyle centered={props.centered}>
    {props.main}
    {props.sub && (
      <>
        <br /> <Sub>{props.sub}</Sub>
      </>
    )}
  </HeadlineStyle>
);
