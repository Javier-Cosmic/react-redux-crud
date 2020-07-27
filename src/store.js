import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducers';
import rootSagas from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    sagaMiddleware.run(rootSagas);

export default store;