import * as React from 'react';
import styled from 'styled-components';

interface headlineStyleProps {
  centered?: boolean;
  gutterBottom?: boolean;
}

const HeadlineStyle = styled.h2.attrs((props: headlineStyleProps) => ({
  centered: props.centered,
  gutterBottom: props.gutterBottom,
}))`
  padding-bottom: ${(props) => (props.gutterBottom ? '0.8em' : '0.2em')};
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  color: ${(props) => props.theme.accent};
`;

const Sub = styled.span`
  color: ${(props) => props.theme.accentDark};
`;

interface headlineProps extends headlineStyleProps {
  children: React.ReactNode;
  sub?: String;
}

export const Headline = (props: headlineProps) => (
  <HeadlineStyle {...props}>
    {props.children}
    {props.sub && (
      <>
        <br /> <Sub>{props.sub}</Sub>
      </>
    )}
  </HeadlineStyle>
);
