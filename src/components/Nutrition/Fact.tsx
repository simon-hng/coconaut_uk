import * as React from 'react';
import CountUp, { useCountUp } from 'react-countup';
import styled from 'styled-components';

const FactStyle = styled.li`
  margin: 0 0.8rem 0.8rem 0;
  min-width: 5.5rem;
  min-height: 7rem;

  @media (min-width: 400px) {
    margin: 0 1.5rem 1.5rem 0;
  }
`;

const Name = styled.p`
  font-size: 0.7rem;
  font-family: Montserrat;
`;

const Value = styled(CountUp)`
  color: ${(props) => props.theme.accent};
  font-size: 4rem;
`;

const Unit = styled.span`
  color: ${(props) => props.theme.accent};
`;

// https://stackoverflow.com/questions/27082377/get-number-of-decimal-places-with-javascript
const countDecimals = (value: number) => {
  let text = value.toString();
  // verify if number 0.000005 is represented as "5e-6"
  if (text.indexOf('e-') > -1) {
    let [, trail] = text.split('e-');
    let deg = parseInt(trail, 10);
    return deg;
  }
  // count decimals for number in representation like "0.123456"
  if (Math.floor(value) !== value)
    return value.toString().split('.')[1].length || 0;

  return 0;
};

interface FactProps {
  name: String;
  value: number;
  unit: String;
  delay: number;
  inView: boolean;
}

export const Fact = ({ name, delay, value, unit, inView }: FactProps) => {
  return (
    <FactStyle>
      <Name>{name}</Name>
      {inView && (
        <Value
          delay={delay}
          decimals={countDecimals(value)}
          end={value}
          duration={0.8}
        />
      )}
      <Unit>{unit}</Unit>
    </FactStyle>
  );
};
