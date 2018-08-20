import React from "react";
import styled, {css} from "react-emotion";
import { connect } from "react-redux";

import LockIcon from "./icon-lock.svg";

const SVGWrapper = styled(LockIcon)`
    overflow: overlay;
    position: absolute;
    width: 40%;
    top: 1rem;
    right: -2rem;
    fill: ${props => {
        if (props.verified) return "#65E53B";
        if (props.locked) return "#E51B1B";
        return "#5A718B";
    }};
    opacity: 0.05;

    #top {
        transform: rotateY(0deg);
        transform-origin: 1rem 0;
        transition: transform 1s ease;
        ${props => props.verified && css`
            transform: rotateY(-180deg);
        `}
    }

    @media (max-width: 400px) {
        width: 50%;
    }
`;

const Lock = ({locked, verified}) => (
    <SVGWrapper
        locked={locked}
        verified={verified}
    />
);

const mapStateToProps = ({locked, verified}) => ({
    locked,
    verified
});

export default connect(mapStateToProps)(Lock);