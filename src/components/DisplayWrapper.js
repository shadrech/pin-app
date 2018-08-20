import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'react-emotion';

const Display = styled('div')`
    display: block;
    text-align: center;
    padding-right: 4rem;
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

const PinText = styled('p')`
    font-size: 1rem;
`;

class DisplayWrapper extends Component {
    render() {
        const headingText = "enter passcode";
        const subHeadingText = "Please enter your passcode";
        return (
            <Display>
                <UpperText>
                    <Heading>{headingText.toUpperCase()}</Heading>
                    <SubHeading>{subHeadingText}</SubHeading>
                </UpperText>
                <PinText>
                    {this.props.pin.join(",")}
                </PinText>
            </Display>
        )
    }
}

const mapStateToProps = ({ pin }) => ({
    pin
});

export default connect(mapStateToProps)(DisplayWrapper);
