import { createStore, combineReducers } from 'redux';
import demo from './reducers/demo';
const reducer = combineReducers({
    demo,
});

const store = createStore(reducer);

export default store;