import styled from 'styled-components';

export const Subheadline = styled.h3.attrs((props: { centered: boolean }) => ({
  centered: props.centered,
}))`
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  padding-bottom: 0.5em;
  color: ${(props) => props.theme.accentDark};
`;
