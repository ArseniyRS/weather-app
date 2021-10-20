import {rootReducer} from "./reducers/";
import {createStore, compose, applyMiddleware} from "redux";
import {rootWatcher} from "../sagas";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()


export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
sagaMiddleware.run(rootWatcher)
export type RootState = ReturnType<typeof rootReducer>

