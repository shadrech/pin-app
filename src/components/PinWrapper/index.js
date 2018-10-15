import React from "react";

import { Wrapper } from "./styles";
import DisplayWrapper from "../DisplayWrapper";
import ButtonsWrapper from "../ButtonsWrapper";
import Lock from "../Lock";

const PinWrapper = () => (
    <Wrapper>
        <Lock />
        <DisplayWrapper />
        <ButtonsWrapper />
    </Wrapper>
);

export default PinWrapper;