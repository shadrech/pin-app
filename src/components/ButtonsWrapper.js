import React, {Component} from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "react-emotion";

import Button from "./Button";
import { addNewNumberToPin } from "../state/actions";

const BtnWrapper = styled('div')`
    display: block;
`;

const RowWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    &:last-child {
        margin-bottom: 0;
    }
`;

class ButtonsWrapper extends Component {
    handleNumberPress = number => () => {
        this.props.addNewNumberToPin(number);
    }

    render() {
        return (
            <BtnWrapper>
                <RowWrapper>
                    <Button number={1} onPress={this.handleNumberPress} />
                    <Button number={2} onPress={this.handleNumberPress} />
                    <Button number={3} onPress={this.handleNumberPress} />
                </RowWrapper>
                <RowWrapper>
                    <Button number={4} onPress={this.handleNumberPress} />
                    <Button number={5} onPress={this.handleNumberPress} />
                    <Button number={6} onPress={this.handleNumberPress} />
                </RowWrapper>
                <RowWrapper>
                    <Button number={7} onPress={this.handleNumberPress} />
                    <Button number={8} onPress={this.handleNumberPress} />
                    <Button number={9} onPress={this.handleNumberPress} />
                </RowWrapper>
                <RowWrapper>
                    <Button number={0} onPress={this.handleNumberPress} />
                </RowWrapper>
            </BtnWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addNewNumberToPin
}, dispatch);

export default connect(null, mapDispatchToProps)(ButtonsWrapper);