import * as React from "react";
import styled from "styled-components";

import Layout from "./Layout";

interface SectionProps {
  left: JSX.Element;
  right: JSX.Element;
}

const Main = styled.section`
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

const SectionTwoCol = (props: SectionProps) => (
  <Layout>
    <Main>
      <Content>{props.left}</Content>
      <Content>{props.right}</Content>
    </Main>
  </Layout>
);

export default SectionTwoCol;
