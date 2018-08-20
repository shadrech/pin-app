import { NUMBER_PRESS } from "./constants";

export const addNewNumberToPin = number => ({
    type: NUMBER_PRESS,
    number
})
