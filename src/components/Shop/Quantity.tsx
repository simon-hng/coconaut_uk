import { Button } from '@components/Global';
import * as React from 'react';
import styled from 'styled-components';

const QuantityStyle = styled.div`
  width: 9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = (props: any) => (
  <Button margin='0' padding='0.5rem 1rem' {...props}>
    {props.children}
  </Button>
);

const Label = styled.label`
  width: 0;
  height: 0;
  overflow: hidden;
  display: none;
`;

const StyledInput = styled.input`
  border: none;
  width: 3rem;
  text-align: center;
  font-size: 1.4rem;

  & ::-webkit-inner-spin-button,
  .no-spin::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
  }
  -moz-appearance: textfield;
`;

interface quantityProps {
  id: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const Quantity = ({ id, value, setValue }: quantityProps) => {
  const handleDecrease = () => setValue(Math.max(1, value - 1));

  const handleChange = (e) => {
    const newValue = Number.parseInt(e.target.value);
    const updatedValue = Number.isInteger(newValue) ? Math.max(newValue, 1) : 1;
    setValue(updatedValue);
  };

  const handleIncrease = () => setValue(value + 1);

  return (
    <QuantityStyle>
      <StyledButton onClick={handleDecrease}>-</StyledButton>
      <StyledInput
        id={`${id}Quantity`}
        onChange={handleChange}
        type='number'
        min={1}
        value={value}
      />
      <Label htmlFor={`${id}Quantity`}>Quantity</Label>
      <StyledButton onClick={handleIncrease}>+</StyledButton>
    </QuantityStyle>
  );
};
