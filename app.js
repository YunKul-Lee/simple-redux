import { createStore, actionCreator } from './redux.js';
import { reducer } from './reducer.js';
import { increase } from './actions.js';

const store = createStore(reducer);

store.subscribe(function (){
    console.log(store.getState());
});

store.dispatch(increase());
store.dispatch(increase());
