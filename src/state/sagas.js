import { takeEvery } from "redux-saga/effects";

import { LOCK_COUNTDOWN } from "./constants";

// eslint-disable-next-line
function* handleCountdown(action) {
    console.log("handle lockdown!", action);
}

function* theMotherOfAllSagas() {
    yield takeEvery(LOCK_COUNTDOWN, handleCountdown);
}

export default theMotherOfAllSagas;