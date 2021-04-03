import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import indexReducer from './reducers/indexReducer';

const store = createStore(indexReducer, composeWithDevTools())

export default store;