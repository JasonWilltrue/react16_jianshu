import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reduce from './reduce';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reduce,enhancer);

export default store;