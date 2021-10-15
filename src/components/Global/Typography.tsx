import * as React from 'react';
import styled from 'styled-components';

interface typographyProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
  fontSize?: number;
  margin?: string;
  padding?: string;
}

export const Typography = styled.p.attrs((props: typographyProps) => ({
  bold: props.bold || false,
  fontSize: `${props.fontSize || 1.4}rem`,
  align: props.align || 'left',
  margin: props.margin || 0,
  padding: props.padding || 0,
}))`
  ${(props) => props.bold && 'font-weight: bold'};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.align};
`;
