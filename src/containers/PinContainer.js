import React from "react";
import styled from "react-emotion";

import PinWrapper from "../components/PinWrapper";

const AppWrapper = styled('div')`
    background: linear-gradient(to bottom, #7e8b99 0%,#ccd9e2 100%);
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