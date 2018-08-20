import { NUMBER_PRESS } from "./constants";

const initialState = {
    pin: [1,5,3,9],
    locked: false,
    lockedCountdown: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NUMBER_PRESS:
            return {
                ...state,
                pin: state.pin.concat([action.number])
            }
        default:
            return state;
    }
}