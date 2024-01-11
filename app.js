import {createStore} from './redux.js';
import {reducer} from './reducer.js';
import * as Actions from './actions.js';
import {logger} from "./logger.js";
import { ASYNC_INCREASE_COUNTER } from "./action-type.js";

// const middleware1 = store => next => action => {
//     console.log('m1 =>', action);
//     next(action);
// };
//
// const middleware2 = store => next => action => {
//     console.log('m2 =>', action);
//     if(action.type === SET_COUNTER) {
//         action.payload = 100;
//     }
//     next(action);
// };
//
// const middleware3 = store => next => action => {
//     console.log('m3 =>', action);
//     if(action.type === ASYNC_INCREASE_COUNTER) {
//         setTimeout(() => {
//             next(Actions.increaseCounter());
//         }, 1000);
//     } else {
//         next(action);
//     }
// };

const asyncRouter = jobs => store => next => action => {
    const matchJob = Object.entries(jobs).find(([type]) => action.type === type);

    if(matchJob) {
        matchJob[1](store, action);
    } else {
        next(action);
    }
};

const asyncJobs = {
    [ASYNC_INCREASE_COUNTER]: function (store, action) {
        store.dispatch(Actions.asyncRequest());
        setTimeout(() => {
            store.dispatch(Actions.increaseCounter(20));
            store.dispatch(Actions.asyncResponse());
        }, 3000);
    }
};


const store = createStore(reducer, [logger, asyncRouter(asyncJobs)]);

const counterDisplay = document.querySelector('#counter');
const loadingMessage = document.querySelector('#loading');
const btnIncrease = document.querySelector('#btn-increase');
const btnAsyncIncrease = document.querySelector('#btn-async-increase');
const btnDecrease = document.querySelector('#btn-decrease');
const btnReset = document.querySelector('#btn-reset');

store.subscribe(function (){
    const { counter, request } = store.getState();

    loadingMessage.style.visibility = request ? 'visible' : 'hidden';
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

