import rootReducer from './rootReducer';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const middleWare = [];
if (process.env.NODE_ENV ==="development"){
    middleWare.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middleWare));
export default store;