import React from "react";
import renderer from "react-test-renderer";

import Details from "./Details";
import { ActiveCountry } from "../../../tools/MockData";

describe("initial state", () => {
	it("should render the details for the active country", () => {
		const tree = renderer.create(<Details data={ActiveCountry} />);
		expect(tree).toMatchInlineSnapshot(`
      <section
        className="sc-bdfBQB iHsLyp"
      >
        <div>
          <h2>
            Afghanistan
          </h2>
          <ul>
            <li>
              Deaths: 
              7,199
            </li>
            <li>
              Confirmed: 
              154,960
            </li>
            <li>
              Mortaliy Rate: 
              4.65
            </li>
            <li>
              Incident Rate: 
              398.06
            </li>
          </ul>
          <span>
            Last Updated
            9/24/2021
          </span>
        </div>
      </section>
    `);
	});
});
