import React from "react";
import { mount } from "enzyme";
import {PinCircle} from "../PinCircle";

describe("<PinCircle /> component", () => {    
    test("should render orange circle when not verified", () => {
        const circle = mount(<PinCircle number={null} index={1} verified={false} pinLength={0} locked={false} />);
        expect(circle).toMatchSnapshot();
    })
})