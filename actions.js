import { INCREASE_COUNTER, ASYNC_INCREASE_COUNTER, DECREASE_COUNTER, SET_COUNTER, ASYNC_RESPONSE, ASYNC_REQUEST } from "./action-type.js";
import { actionCreator } from "./redux.js";

export const increaseCounter = actionCreator(INCREASE_COUNTER);
export const decreaseCounter = actionCreator(DECREASE_COUNTER)
export const asyncIncreaseCounter = actionCreator(ASYNC_INCREASE_COUNTER);
export const setCounter = actionCreator(SET_COUNTER);
export const asyncRequest = actionCreator(ASYNC_REQUEST);
export const asyncResponse = actionCreator(ASYNC_RESPONSE);