import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Circle, CircleNumber } from "./styles";
import { statusColor } from "../utils";

export const PinCircle = ({number, index, verified, pinLength, locked}) =>
  <Circle className="pin_circle" number={number} index={index} verified={verified} locked={locked} pinLength={pinLength}>
    {number && <CircleNumber color={statusColor({verified, locked})}>{number}</CircleNumber>}
  </Circle>

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
