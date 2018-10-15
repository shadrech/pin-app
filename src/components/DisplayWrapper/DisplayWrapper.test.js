import React from "react";
import { shallow } from "enzyme";

import { DisplayWrapper } from ".";
import { PinWrapper } from "./styles";

describe("<DisplayWrapper />", () => {
  const pin = [1,3,5,7];

  test("should display correct number of pinCircles", () => {
    const display = shallow(<DisplayWrapper pin={pin} verified={true} locked={false} lockCountdown={30} attempts={1} />);
    expect(display.find(PinWrapper).children()).toHaveLength(4);
  });
});
