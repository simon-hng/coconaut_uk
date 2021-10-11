import * as React from "react";
import styled from "styled-components";

import { Card, Headline } from "@components/global";
import BackgroundImage from "@images/hero/Coconaut_Skyline@1694x-100.jpg";

const Background = styled.section`
  width: 100vh;
  background-image: url(${BackgroundImage});
`;

const Events = (): JSX.Element => {
  //TODO: get instagram data
  const data = {};
  return (
    <>
      <Headline main="Join Our Events" centered />
      <Background>
        {data && (
          <ul>
            {/* {data.allInstaNode.edges.map((post) => {
              const node = post.node;
              return (
                <li>
                  <Card src={node.original}>{node.caption}</Card>;
                </li>
              );
            })} */}
          </ul>
        )}
      </Background>
    </>
  );
};

export default Events;
