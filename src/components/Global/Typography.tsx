import * as React from 'react';
import styled from 'styled-components';

interface TypographyProps {
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
  underline?: boolean;
  children: React.ReactNode;
}

export default styled.p<TypographyProps>`
  ${(props) =>
    props.bold && 'font-weight: bold'}// TODO: implement features as needed
`;
