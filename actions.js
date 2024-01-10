import { INCREASE } from "./action-type.js";
import { actionCreator } from "./redux.js";

export const increase = () => actionCreator(INCREASE);