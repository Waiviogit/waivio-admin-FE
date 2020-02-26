import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
    const isServer = typeof window === 'undefined';
    const middleware = isServer || ['production', 'test'].includes(process.env.NODE_ENV)
        ? applyMiddleware(sagaMiddleware)
        : (window.__REDUX_DEVTOOLS_EXTENSION__
            ? compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__())
            : compose(applyMiddleware(sagaMiddleware)));
    const store = createStore(
        // rootReducer,
        persistedReducer,
        initialState,
        middleware,
    );

    store.__PERSISTOR = persistStore(store);
    
    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga);
    };
    store.runSagaTask();
    
    return store;
}

export default configureStore;
