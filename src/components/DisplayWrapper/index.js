import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

import { Display, UpperText, Heading, SubHeading, PinWrapper } from "./styles";
import PinCircle from '../PinCircle';
import { MAX_PIN_LENGTH } from '../../state/constants';

export class DisplayWrapper extends Component {
    attempts = 0

    componentDidUpdate(prevProps) {
        this.attempts = this.props.attempts;
    }

    getSubHeadingTxt = () => {
        const {verified, locked, lockCountdown} = this.props;
        if (verified) {
            return "Passcode verified";
        } else if (locked) {
            return `Locked for ${lockCountdown} secs`;
        }
        return "Please enter your passcode";
    }

    renderPinSection = () => {
        const {pin} = this.props;
        const Circles = [];
        for (let i = 0; i < MAX_PIN_LENGTH; i++) {
            Circles.push(<PinCircle key={i} number={pin[i]} index={i} />)
        }
        return (
            <Fragment>
                {Circles}
            </Fragment>
        )
    }

    render() {
        const {verified, locked, attempts} = this.props;
        const headingText = "enter passcodes";
        const subHeadingText = this.getSubHeadingTxt();
        return (
            <Display>
                <UpperText>
                    <Heading>{headingText.toUpperCase()}</Heading>
                    <SubHeading id="display_subheading" verified={verified} locked={locked} neutral>{subHeadingText}</SubHeading>
                </UpperText>
                <PinWrapper shake={attempts > this.attempts}>
                    {this.renderPinSection()}
                </PinWrapper>
            </Display>
        )
    }
}

const mapStateToProps = ({ pin, verified, locked, lockCountdown, attempts }) => ({
    pin,
    verified,
    locked,
    lockCountdown,
    attempts
});

export default connect(mapStateToProps)(DisplayWrapper);
