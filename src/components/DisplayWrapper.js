import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import styled, {keyframes, css} from 'react-emotion';
import PinCircle from './PinCircle';
import { MAX_PIN_LENGTH } from '../state/constants';

const Display = styled('div')`
    display: block;
    text-align: center;
    padding-right: 4rem;
    margin-bottom: 2rem;
`;

const UpperText = styled('div')`
    color: #D8D8D8;
`;

const Heading = styled('p')`
    font-size: 1rem;
    font-family: "GothamRounded-Medium";
    margin-bottom: 0;
`;
const SubHeading = styled('p')`
    font-family: "GothamRounded-Light";
    font-size: 0.9rem;
    margin: 0;
`;

const shake = keyframes`
    0% {
        transform: translateX(0%);
    }
    10% {
        transform: translateX(10%);
    }
    20% {
        transform: translateX(-10%);
    }
    30% {
        transform: translateX(7%);
    }
    40% {
        transform: translateX(-5%);
    }
    50% {
        transform: translateX(5%);
    }
    60% {
        transform: translateX(-3%);
    }
    70% {
        transform: translateX(2%);
    }
    80% {
        transform: translateX(-2%);
    }
    90% {
        transform: translateX(1%);
    }
    95% {
        transform: translateX(-1%);
    }
    97% {
        transform: translateX(0.5%);
    }
    100% {
        transform: translateX(0%);
    }
`;

const PinWrapper = styled('div')`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    ${props => props.shake && css`
        animation: ${shake} 1s ease;
    `}
`;

class DisplayWrapper extends Component {
    attempts = 0

    componentDidUpdate(prevProps) {
        this.attempts = this.props.attempts;
    }

    getSubHeadingTxt = () => {
        const {verified, locked, lockCountdown} = this.props;
        if (verified) {
            return "Passcode verified";
        } else if (locked) {
            return `Max attempts reached. Locked for ${lockCountdown} secs`;
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
        const headingText = "enter passcode";
        const subHeadingText = this.getSubHeadingTxt();
        return (
            <Display>
                <UpperText>
                    <Heading>{headingText.toUpperCase()}</Heading>
                    <SubHeading>{subHeadingText}</SubHeading>
                </UpperText>
                <PinWrapper shake={this.props.attempts > this.attempts}>
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
