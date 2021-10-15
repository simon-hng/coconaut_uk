import styled from 'styled-components';

interface subheadlineProps {
  centered: boolean;
  gutterBottom: boolean;
}

export const Subheadline = styled.h3.attrs((props: subheadlineProps) => ({
  centered: props.centered,
  gutterBottom: props.gutterBottom,
}))`
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  padding-bottom: ${(props) => props.gutterBottom && '0.5em'};
  color: ${(props) => props.theme.accentDark};
`;
