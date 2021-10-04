import * as React from "react";
import styled from "styled-components";

interface SectionProps {
  visual: JSX.Element;
  text: JSX.Element;
  visualFirst?: true;
}

const Main = styled.section`
  display: flex;
  flex-direction: row;

  div {
    width: 50%;
  }
`;

const SectionTwoCol = (props: SectionProps) => (
  <Main>
    <div>{props.visual}</div>
    <div>{props.text}</div>
  </Main>
);

export default SectionTwoCol;
