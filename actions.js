import { INCREASE_COUNTER, ASYNC_INCREASE_COUNTER, DECREASE_COUNTER, SET_COUNTER } from "./action-type.js";
import { actionCreator } from "./redux.js";

export const increaseCounter = actionCreator(INCREASE_COUNTER);
export const decreaseCounter = actionCreator(DECREASE_COUNTER)
export const asyncIncreaseCounter = actionCreator(ASYNC_INCREASE_COUNTER);
export const setCounter = actionCreator(SET_COUNTER)