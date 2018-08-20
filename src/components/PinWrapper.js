import React from "react";
import styled from "react-emotion";

import DisplayWrapper from "./DisplayWrapper";
import ButtonsWrapper from "./ButtonsWrapper";

const Wrapper = styled('div')`
    height: 30rem;
    width: 18rem;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2rem 0 1rem 0;
`;

const PinWrapper = () => (
    <Wrapper>
        <DisplayWrapper />
        <ButtonsWrapper />
    </Wrapper>
);

export default PinWrapper;