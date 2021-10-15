import styled from 'styled-components';

interface sectionWrapperProps {
  cover?: boolean;
}

export const SectionWrapper = styled.div.attrs(
  (props: sectionWrapperProps) => ({
    cover: props.cover,
  })
)`
  margin: auto;
  padding: 5rem 0;

  ${(props) => !props.cover && 'max-width: 1400px;'}
`;
