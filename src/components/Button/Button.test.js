import React from "react";
import { mount } from "enzyme";
import { Button } from ".";
import { ButtonWrapper } from "./styles";

describe("<Button />", () => {
  const num = 3;

  test("should render correct number", () => {
    const btn = mount(<Button number={num} locked={false} onPress={() => null} />);
    expect(btn.text()).toBe(String(num));
  });

  test("should only call onPress function if not locked", () => {
    let fn = jest.fn();
    let btn = mount(<Button number={num} locked={false} onPress={fn} />);
    btn.simulate("click");
    expect(fn).toHaveBeenCalled();

    btn = mount(<Button number={num} locked={true} onPress={fn} />);
    fn = jest.fn();
    btn.simulate("click");
    expect(fn).not.toHaveBeenCalled();
  });

  // test("should render correct styling when hovered", () => {
  //   const btn = mount(<Button number={num} locked={false} onPress={() => null} />);
  //   const btnWrapper = btn.find(ButtonWrapper);
  //   btnWrapper.simulate("mouseenter");
  //   expect(btnWrapper).toHaveStyleRule("box-shadow", "0px 0px 0.2rem 0.9rem rgba(37,171,255,0.22)");
  // });
});