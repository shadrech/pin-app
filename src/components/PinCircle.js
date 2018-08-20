import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled, {css} from "react-emotion";

const Circle = styled('div')`
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    margin: 0 0.5rem;
    background: ${props => props.verified ? "green" : "#FD7762"};
    opacity: ${props => props.index >= props.pinLength ? 0.2 : 1}
    ${props => (props.index === props.pinLength - 1) && css`
        opacity: 1;
        background: none;
        &:before {
            content: "${props.number}";
            color: #FD7762;
            font-family: "GothamRounded-Light";
            font-size: 0.6rem;
        }
    `}
`;

const PinCircle = ({number, index, verified, pinLength}) => <Circle number={number} index={index} verified={verified} pinLength={pinLength} />

const mapStateToProps = state => ({
    pinLength: state.pin.length,
    verified: state.verified
});

PinCircle.propTypes = {
    number: PropTypes.number,
    index: PropTypes.number
}

export default connect(mapStateToProps)(PinCircle);
