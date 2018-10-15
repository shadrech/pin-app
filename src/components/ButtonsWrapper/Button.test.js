import React from "react";
import { mount } from "enzyme";
import {Button} from "../Button";

describe("<Button /> component", () => {
    const func = jest.fn();
    const curryFunc = num => func;
    const button = mount(<Button number={3} onPress={curryFunc} />);
    
    test("should render correct number in button", () => {
        expect(button.text()).toBe("3");
    });
    test("should handle click event", () => {
        button.simulate("click");
        expect(func).toHaveBeenCalled();
    })
});