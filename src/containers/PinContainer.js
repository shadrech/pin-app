import React from "react";
import styled from "react-emotion";

import PinWrapper from "../components/PinWrapper";

const AppWrapper = styled('div')`
    background: linear-gradient(to bottom, rgba(90,113,139,0.1) 0%,rgba(90,113,139,0.5) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const PinContainer = () => (
    <AppWrapper>
        <PinWrapper />
    </AppWrapper>
);

export default PinContainer;