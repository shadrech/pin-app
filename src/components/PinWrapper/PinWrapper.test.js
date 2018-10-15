import React from "react";
import { shallow } from "enzyme";
import PinWrapper from ".";

describe("<PinWrapper /> component", () => {    
    test("should match snapshot", () => {
        const wrapper = shallow(<PinWrapper />);
        expect(wrapper).toMatchSnapshot();
    })
})