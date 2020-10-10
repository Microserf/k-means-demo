import { createStore } from 'redux'

function counter(state = 0, action) {
}


let store = createStore(counter);

store.subscribe(() => console.log(store.getState()))


export default store;
