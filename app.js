import { createStore, actionCreator } from './redux.js';
import { reducer } from './reducer.js';
import * as Actions from './actions.js';
import {ASYNC_INCREASE_COUNTER, SET_COUNTER} from "./action-type.js";

const middleware1 = store => next => action => {
    console.log('m1 =>', action);
    next(action);
};

const middleware2 = store => next => action => {
    console.log('m2 =>', action);
    if(action.type === SET_COUNTER) {
        action.payload = 100;
    }
    next(action);
};

const middleware3 = store => next => action => {
    console.log('m3 =>', action);
    if(action.type === ASYNC_INCREASE_COUNTER) {
        setTimeout(() => {
            next(Actions.increaseCounter());
        }, 1000);
    } else {
        next(action);
    }
};

const store = createStore(reducer, [middleware1, middleware2, middleware3]);

const counterDisplay = document.querySelector('#counter');
const btnIncrease = document.querySelector('#btn-increase');
const btnAsyncIncrease = document.querySelector('#btn-async-increase');
const btnDecrease = document.querySelector('#btn-decrease');
const btnReset = document.querySelector('#btn-reset');

store.subscribe(function (){
    const { counter } = store.getState();

    counterDisplay.textContent = counter;
});

store.dispatch(Actions.setCounter(0));

btnReset.addEventListener('click', () => {
    store.dispatch(Actions.setCounter(0));
});

btnIncrease.addEventListener('click', () => {
    store.dispatch(Actions.increaseCounter());
});

btnDecrease.addEventListener('click', () => {
    store.dispatch(Actions.decreaseCounter());
});

btnAsyncIncrease.addEventListener('click', () => {
    store.dispatch(Actions.asyncIncreaseCounter({ url: 'async-increase' }));
});



// store.dispatch(Actions.increase());
// store.dispatch(Actions.increase());
// store.dispatch(Actions.increase());
// store.dispatch(Actions.decrease());
// store.dispatch(Actions.reset());
