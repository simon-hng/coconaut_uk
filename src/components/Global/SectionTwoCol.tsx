import * as React from 'react';
import styled from 'styled-components';

import Layout from './Layout';

interface SectionProps {
  left: JSX.Element;
  right: JSX.Element;
}

const SectionTwoCol = styled.section`
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

export default (props: SectionProps) => (
  <Layout>
    <SectionTwoCol>
      <Content>{props.left}</Content>
      <Content>{props.right}</Content>
    </SectionTwoCol>
  </Layout>
);
