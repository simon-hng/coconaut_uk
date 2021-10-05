import * as React from "react";
import styled from "styled-components";

import Layout from "./Layout";

interface SectionProps {
  visual: JSX.Element;
  text: JSX.Element;
  visualFirst?: boolean;
}

const Main = styled.section`
  display: flex;
  padding: 3rem;
  flex-direction: ${(props) =>
    props.visualFirst ? "column" : "column-reverse"};

  @media (min-width: 900px) {
    flex-direction: ${(props) => (props.visualFirst ? "row" : "row-reverse")};
  }

  div {
    padding: 3rem;
    @media (min-width: 900px) {
      width: 50%;
    }
  }
`;

const SectionTwoCol = (props: SectionProps) => (
  <Layout>
    <Main visualFirst={props.visualFirst}>
      <div>{props.visual}</div>
      <div>{props.text}</div>
    </Main>
  </Layout>
);

export default SectionTwoCol;
