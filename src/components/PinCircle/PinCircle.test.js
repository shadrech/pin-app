import React from "react";
import { mount } from "enzyme";
import {PinCircle} from ".";
import { CircleNumber, Circle } from "./styles";

describe("<PinCircle /> component", () => {
  const num = 3;

  test("should display red dot when no number provided", () => {
    const circle = mount(<PinCircle number={null} index={1} verified={false} pinLength={0} locked={false} />);
    expect(circle.find(Circle)).toHaveStyleRule("background", "#FD7762");
  });

  test("should display number when number is passed", () => {
    const circle = mount(<PinCircle number={num} verified={false} pinLength={3} locked={false} />);
    expect(circle.find(Circle)).toHaveStyleRule("background", "transparent");
    const number = circle.find(CircleNumber);
    expect(number).not.toBeUndefined();
    expect(number.text()).toBe(String(num));
  });

  test("should display number in green when passcode verified", () => {
    const circle = mount(<PinCircle number={num} verified={true} pinLength={3} locked={false} />);
    expect(circle.find(Circle)).toHaveStyleRule("background", "transparent");
    const number = circle.find(CircleNumber);
    expect(number).not.toBeUndefined();
    expect(number.text()).toBe(String(num));
    expect(number).toHaveStyleRule("color", "#65E53B");
  });
})