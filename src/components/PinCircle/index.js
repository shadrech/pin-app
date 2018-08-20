import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Circle } from "./styles";

const PinCircle = ({number, index, verified, pinLength, locked}) => <Circle number={number} index={index} verified={verified} locked={locked} pinLength={pinLength} />

const mapStateToProps = ({pin, locked, verified}) => ({
    pinLength: pin.length,
    verified,
    locked
});

PinCircle.propTypes = {
    number: PropTypes.number,
    index: PropTypes.number
}

export default connect(mapStateToProps)(PinCircle);
