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

export const StyledButton = (props) => (
  <Button margin='0' padding='0.5rem 1rem' {...props}>
    {props.children}
  </Button>
);

export default (props: {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { value, setValue } = props;
  return (
    <Quantity>
      <StyledButton onClick={() => setValue(Math.max(1, value - 1))}>
        -
      </StyledButton>
      <Typography bold>{value}</Typography>
      <StyledButton onClick={() => setValue(value + 1)}>+</StyledButton>
    </Quantity>
  );
};
