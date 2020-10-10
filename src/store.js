import { configureStore } from '@reduxjs/toolkit'

import { personaReducer } from './reducers';

let store = configureStore({reducer: personaReducer});

store.subscribe(() => console.log(store.getState()))


export default store;
