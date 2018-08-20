import { delay, eventChannel, END } from "redux-saga";
import { takeEvery, select, put, take, call } from "redux-saga/effects";

import { LOCK_COUNTDOWN_UPDATE, LAST_NUMBER_PRESS, PIN, PIN_VERIFIED, RESET_PIN, ATTEMPT_FAIL, MAX_ATTEMPTS, LOCK_UP, RESET_APP, LOCK_DURATION } from "./constants";

function countdown(seconds) {
    return eventChannel(emitter => {
        const interval = setInterval(() => {
          seconds -= 1;
          if (seconds > 0) {
            emitter(seconds);
          } else {
            emitter(END);
          }
        }, 1000);
        return () => {
          clearInterval(interval);
        }
      }
    )
}
function* handleCountdown() {
    const channel = yield call(countdown, LOCK_DURATION);
    try {
        while (true) {
            let seconds = yield take(channel);
            yield put({type: LOCK_COUNTDOWN_UPDATE, seconds});
        }
    } finally {
        yield put({type: RESET_APP});
    }
}

function* verifyPin() {
    const enteredPin = yield select(state => state.pin);
    if (PIN.join() === enteredPin.join()) {
        yield put({type: PIN_VERIFIED});
        yield delay(4000);
        yield put({type: RESET_APP});
    } else {
        yield put({type: ATTEMPT_FAIL});
        const attempts = yield select(state => state.attempts);
        if (attempts === MAX_ATTEMPTS) {
            yield put({type: LOCK_UP});
            yield put({type: RESET_PIN});
            yield handleCountdown();
        }
        yield put({type: RESET_PIN});
    }
}

function* theMotherOfAllSagas() {
    yield takeEvery(LAST_NUMBER_PRESS, verifyPin);
}

export default theMotherOfAllSagas;