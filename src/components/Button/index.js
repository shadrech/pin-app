import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { ButtonWrapper } from "./styles";

const Button = ({number, locked, onPress}) => (
    <ButtonWrapper onClick={locked ? null : onPress(number)} locked={locked}>
        {number}
    </ButtonWrapper>
);

Button.propTypes = {
    number: PropTypes.oneOf([0,1,2,3,4,5,6,7,8,9]),
    onPress: PropTypes.func // must be currying function
};

const mapStateToProps = ({locked}) => ({
    locked
});

export default connect(mapStateToProps)(Button);
