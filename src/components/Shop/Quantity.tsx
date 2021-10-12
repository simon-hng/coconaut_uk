import * as React from 'react';
import { Button, Typography } from '@components/Global';
import styled from 'styled-components';

const Quantity = styled.div`
  width: 9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButton = (props: { children: React.ReactNode }) => (
  <Button margin='0' padding='0.5rem 1rem'>
    {props.children}
  </Button>
);

export default () => (
  <Quantity>
    <StyledButton>-</StyledButton>
    <Typography bold>1</Typography>
    <StyledButton>+</StyledButton>
  </Quantity>
);
