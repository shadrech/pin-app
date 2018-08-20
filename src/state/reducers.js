import { NUMBER_PRESS, LAST_NUMBER_PRESS, ATTEMPT_FAIL, RESET_PIN, LOCK_UP, PIN_VERIFIED, RESET_APP } from "./constants";

const initialState = {
    pin: [],
    attempts: 0,
    verified: false,
    locked: false,
    lockCountdown: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NUMBER_PRESS:
        case LAST_NUMBER_PRESS:
            return {
                ...state,
                pin: state.pin.concat([action.number])
            }
        case PIN_VERIFIED:
            return {
                ...state,
                verified: true
            }
        case ATTEMPT_FAIL:
            return {
                ...state,
                attempts: ++state.attempts
            }
        case LOCK_UP:
            return {
                ...state,
                locked: true,
                lockCountdown: 30
            }
        case RESET_PIN:
            return {
                ...state,
                pin: [] 
            };
        case RESET_APP:
            return {
                ...initialState
            };
        default:
            return state;
    }
}