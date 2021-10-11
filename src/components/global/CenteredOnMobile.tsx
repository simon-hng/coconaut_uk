import styled from "styled-components";

const CenteredOnMobile = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 900px) {
    justify-content: left;
  }
`;

export default CenteredOnMobile;
