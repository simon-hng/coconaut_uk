import * as React from 'react';
import styled from 'styled-components';

interface typographyProps {
  centered?: boolean;
  gutterBottom?: boolean;
  children: React.ReactNode;
  bold?: boolean;
  fontSize?: number;
  margin?: string;
  padding?: string;
}

export const Typography = styled.p.attrs((props: typographyProps) => ({
  centered: props.centered,
  gutterBottom: props.gutterBottom,
  bold: props.bold,
  fontSize: `${props.fontSize || 1.4}rem`,
  margin: props.margin || 0,
  padding: props.padding || 0,
}))`
  ${(props) => props.bold && 'font-weight: bold'};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  padding-bottom: ${(props) => (props.gutterBottom ? '1.5rem' : '0')};
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  font-size: ${(props) => props.fontSize};
`;
