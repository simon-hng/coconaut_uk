import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import SectionTwoCol from "../global/SectionTwoCol";
import Headline from "../global/Headline";
import NutritionalFact from "./Fact";
import Button from "../global/Button";

const NutritionalFacts = [
  { name: "Energy", value: 95, unit: "kJ" },
  { name: "Carbohydrates", value: 5.5, unit: "kJ" },
  { name: "Fats", value: 0, unit: "g" },
  { name: "Protein", value: 0, unit: "g" },
  { name: "Salt", value: 50, unit: "mg" },
  { name: "Calcium", value: 1.8, unit: "kJ" },
  { name: "Potas", value: 124, unit: "kJ" },
  { name: "Vitamin C", value: 56, unit: "mg" },
];

const FactsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Text = (
  <>
    <Headline main="100 percent" sub="young coconuts" />
    <p>
      Coconaut is an energising drink with a rare combination. It refreshes,
      activates and regenerates. It contains 100% pure young coconut water from
      premium young vietnamese coconuts. No additives. No extra sugar, just the
      full load of coconut power. Want to know more?​
    </p>
  </>
);

const Visual = (
  <>
    <StaticImage
      layout="fullWidth"
      src="../../images/Coconut_and_can_01.png"
      alt="coconut and can"
    />

    <h3>Whats in it?</h3>

    <FactsList>
      {NutritionalFacts.map((fact, index) => (
        <NutritionalFact {...fact} delay={index * 0.4} />
      ))}
    </FactsList>

    <Button to="">Shop now!</Button>
  </>
);

const Nutrition = () => <SectionTwoCol left={Text} right={Visual} />;

export default Nutrition;
