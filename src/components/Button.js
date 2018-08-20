import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const ButtonWrapper = styled('div')`
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = ({number, onPress}) => (
    <ButtonWrapper onClick={onPress(number)}>
        {number}
    </ButtonWrapper>
);

Button.propTypes = {
    number: PropTypes.oneOf([0,1,2,3,4,5,6,7,8,9]),
    onPress: PropTypes.func // must be currying function
};

export default Button;
