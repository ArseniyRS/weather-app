import {put, StrictEffect, takeEvery} from "redux-saga/effects";
import {call, fork, select} from "@redux-saga/core/effects";
import {toggleWeatherLoader} from "../store/reducers/weatherReducer";
import {getCityNameReq, getWeatherByCityIdReq, getWeatherByCityNameReq} from "../api/weather";
import {WRITE_WEATHER, FETCH_GET_WEATHER, FETCH_GET_WEATHER_BY_LOCATION, WRITE_ERROR} from "../constants/weather";
import {AxiosResponse} from "axios";
import {ICity} from "../models/ICity";
import {ICoords} from "../models/ICoords";

interface getWeatherActionType {
    type: "FETCH_GET_WEATHER";
    payload: { city: ICity, unit: string };
}

interface getWeatherByLocationActionType {
    type: "FETCH_GET_WEATHER_BY_LOCATION";
    payload: string;
}

function* getWeather({payload}: getWeatherActionType) {
    try {
        yield put(toggleWeatherLoader(true))
        let response: AxiosResponse = yield call(getWeatherByCityIdReq, payload.city, payload.unit)
        yield put({type: WRITE_WEATHER, payload: response.data})
        yield put(toggleWeatherLoader(false))
    } catch (e: any) {
        yield put({type: WRITE_ERROR, payload: JSON.stringify(e.response)})
        yield put(toggleWeatherLoader(false))
    }
}

function* getWeatherByCityName() {
    try {
        yield put(toggleWeatherLoader(true))
        const getUserLocation = () => new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                location => resolve({
                    longitude: location.coords.longitude,
                    latitude: location.coords.latitude
                }),
                error => reject(error),
            )
        })
        let coords: ICoords = yield call(getUserLocation)
        let weatherByCity: AxiosResponse = yield call(getCityNameReq, coords)
        yield put({type: WRITE_WEATHER, payload: weatherByCity.data})
        yield put(toggleWeatherLoader(false))
    } catch (e: any) {
        yield put({type: WRITE_ERROR, payload: JSON.stringify(e.response)})
        yield put(toggleWeatherLoader(false))
    }
}

export function* writeWeatherWatcher(): Generator<StrictEffect> {
    yield takeEvery(FETCH_GET_WEATHER, getWeather)
    yield takeEvery(FETCH_GET_WEATHER_BY_LOCATION, getWeatherByCityName)
}
