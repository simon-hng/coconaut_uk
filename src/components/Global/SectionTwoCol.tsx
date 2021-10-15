import { SectionWrapper } from './SectionWrapper';
import * as React from 'react';
import styled from 'styled-components';

const SectionTwoColStyle = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  padding: 0 3rem;

  @media (min-width: 900px) {
    width: 50%;
  }
`;

interface sectionTwoColProps {
  id?: string;
  left: React.ReactElement;
  right: React.ReactElement;
}

export const SectionTwoCol = (props: sectionTwoColProps) => (
  <SectionWrapper id={props.id}>
    <SectionTwoColStyle>
      <Content>{props.left}</Content>
      <Content>{props.right}</Content>
    </SectionTwoColStyle>
  </SectionWrapper>
);