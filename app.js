import { createStore, actionCreator } from './redux.js';
import { reducer } from './reducer.js';
import * as Actions from './actions.js';

const store = createStore(reducer);

const counterDisplay = document.querySelector('#counter');
const btnIncrease = document.querySelector('#btn-increase');
const btnAsyncIncrease = document.querySelector('#btn-decrease');
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
