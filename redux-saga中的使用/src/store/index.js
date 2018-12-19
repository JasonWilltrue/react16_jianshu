import {createStore,applyMiddleware,compose} from 'redux';
import reduce from './reduce';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE({}):compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reduce,enhancer);

//监听saga
sagaMiddleware.run(mySaga)

export default store;