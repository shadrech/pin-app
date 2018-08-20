import { NUMBER_PRESS, LAST_NUMBER_PRESS } from "./constants";

export const addNewNumberToPin = number => ({
    type: NUMBER_PRESS,
    number
});

export const addLastNumberToPin = number => ({
    type: LAST_NUMBER_PRESS,
    number
});
