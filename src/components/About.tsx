import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SectionTwoCol from "./global/SectionTwoCol";

const Text = (
  <>
    <h2>
      100 percent <br />
      young coconuts
    </h2>
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
    <StaticImage src="../images/Coconut_and_can_01.png" alt="coconut and can" />
		<h3>Whats in it?</h3>
		{/* TODO: komische zahlen */}
  </>
);

const About = () => {
	return <SectionTwoCol visual={Visual} text={Text}/>
};

export default About;
