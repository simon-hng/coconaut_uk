import styled from 'styled-components';

interface centeredProps {
  onMobile: boolean;
  onBoth: boolean;
}

export const Centered = styled.div.attrs((props: centeredProps) => {
  return {
    onMobile: props.onMobile,
    onBoth: props.onBoth,
  };
})`
  display: flex;
  justify-content: center;
  ${(props) =>
    props.onMobile &&
    `
      @media (min-width: 900px) {
        justify-content: left;
      }
  `}
`;
