import * as ActionType from './action-type.js';

const InitializeState = {
    message: 'app store',
    request: false,
};
export function reducer(state = InitializeState, action) {

    switch (action.type) {
        case ActionType.INCREASE_COUNTER:
            if(action.payload) {
                return {...state, counter: state.counter === undefined ? 1 : state.counter + action.payload};
            } else {
                return {...state, counter: state.counter === undefined ? 1 : state.counter + 1};
            }

        case ActionType.DECREASE_COUNTER:
            return {...state, counter: state.counter === undefined ? 0 : state.counter - 1};
        case ActionType.SET_COUNTER:
            return { ...state, counter: action.payload };
        // case ActionType.ASYNC_INCREASE_COUNTER:
        //     fetch(action.payload.url)
        //         .then(response => response.json())
        //         .then(result => {
        //             return { ...state };
        //         })
        //         .catch(err => {
        //             return { ...state };
        //         });
        //     return { ...state };
        case ActionType.ASYNC_REQUEST:
            return { ...state, request: true };
        case ActionType.ASYNC_RESPONSE:
            return { ...state, request: false };
        default:
            return { ...state };
    }
}