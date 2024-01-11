export const actionCreator = type => payload => ({
    type,
    payload
});


// export function actionCreator(type, payload) {
//     return {
//         type,
//         payload,
//     };
// }

export function createStore(reducer, middlewares = []) {
    let state;
    let handlers = [];

    function dispatch(action) {
        state = reducer(state, action);
        handlers.forEach(handler => handler());
    }

    function subscribe(handler) {
        handlers.push(handler);
    }

    function getState() {
        return state;
    }

    const store = {
        getState,
        subscribe,
        dispatch,
    };

    middlewares = Array.from(middlewares).reverse();
    let lastDispatch = dispatch;

    middlewares.forEach(middleware => {
        lastDispatch = middleware(store)(lastDispatch);
    });

    store.dispatch = lastDispatch;

    return store;
}