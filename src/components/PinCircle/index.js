import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Circle } from "./styles";

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
