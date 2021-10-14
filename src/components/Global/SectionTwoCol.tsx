import * as React from 'react';
import styled from 'styled-components';

import { Layout } from './Layout';

interface SectionProps {
  left: React.ReactElement;
  right: React.ReactElement;
}

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

export const SectionTwoCol = (props: SectionProps) => (
  <Layout>
    <SectionTwoColStyle>
      <Content>{props.left}</Content>
      <Content>{props.right}</Content>
    </SectionTwoColStyle>
  </Layout>
);
