import * as React from 'react';
import styled from 'styled-components';

interface headlineStyleProps {
  centered: boolean;
}

const HeadlineStyle = styled.h2.attrs((props: headlineStyleProps) => ({
  centered: props.centered,
}))`
  padding-bottom: 0.8em;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  color: ${(props) => props.theme.accent};
`;

const Sub = styled.span`
  color: ${(props) => props.theme.accentDark};
`;

interface headlineProps {
  children: React.ReactNode;
  sub?: String;
  centered?: boolean;
}

export const Headline = (props: headlineProps) => (
  <HeadlineStyle centered={props.centered}>
    {props.children}
    {props.sub && (
      <>
        <br /> <Sub>{props.sub}</Sub>
      </>
    )}
  </HeadlineStyle>
);
