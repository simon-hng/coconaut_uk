import styled from 'styled-components';

export const SectionWrapper = styled.div.attrs(
  (props: { cover?: boolean }) => ({
    cover: props.cover,
  })
)`
  margin: auto;
  padding: 5rem 0;

  ${(props) => !props.cover && 'max-width: 1400px;'}
`;
