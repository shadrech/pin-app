import { delay } from "redux-saga";
import { takeEvery, select, put } from "redux-saga/effects";

import { LOCK_COUNTDOWN, LAST_NUMBER_PRESS, PIN, PIN_VERIFIED, RESET_PIN, ATTEMPT_FAIL, MAX_ATTEMPTS, LOCK_UP } from "./constants";

// eslint-disable-next-line
function* handleCountdown(action) {
    console.log("handle lockdown!", action);
}

function* verifyPin() {
    const enteredPin = yield select(state => state.pin);
    if (PIN.join() === enteredPin.join()) {
        yield put({type: PIN_VERIFIED});
        yield delay(4000);
        yield put({type: RESET_PIN});
    } else {
        yield put({type: ATTEMPT_FAIL});
        const attempts = yield select(state => state.attempts);
        if (attempts === MAX_ATTEMPTS) {
            yield put({type: LOCK_UP});
            yield delay(3000);
            yield put({type: RESET_PIN});
        }
        yield put({type: RESET_PIN});
    }
}

function* theMotherOfAllSagas() {
    yield takeEvery(LAST_NUMBER_PRESS, verifyPin);
    yield takeEvery(LOCK_COUNTDOWN, handleCountdown);
}

export default theMotherOfAllSagas;