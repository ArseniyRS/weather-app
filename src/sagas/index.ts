import {all, fork} from "@redux-saga/core/effects";
import {writeWeatherWatcher} from "./weatherSaga";

export function* rootWatcher() {
    yield all([
        fork(writeWeatherWatcher)
    ])
}