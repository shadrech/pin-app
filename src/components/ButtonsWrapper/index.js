import React, {Component} from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { RowWrapper, BtnWrapper } from "./styles";
import Button from "../Button";
import { addNewNumberToPin, addLastNumberToPin } from "../../state/actions";
import { MAX_PIN_LENGTH } from '../../state/constants';

class ButtonsWrapper extends Component {
    handleNumberPress = number => () => {
        const {pinLength} = this.props;
        if (pinLength < MAX_PIN_LENGTH - 1) {
            this.props.addNewNumberToPin(number);
        } else if (pinLength === MAX_PIN_LENGTH - 1) {
            this.props.addLastNumberToPin(number);
        }
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
    addNewNumberToPin,
    addLastNumberToPin
}, dispatch);

const mapStateToProps = state => ({
    pinLength: state.pin.length
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsWrapper);