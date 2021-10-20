import {
    TOGGLE_WEATHER_LOADER,
    WRITE_WEATHER,
    WRITE_CITY,
    WRITE_UNIT, WRITE_ERROR
} from "../../constants/weather";

interface initialState {
    isLoading: boolean,
    city: string,
    weather: string | null,
    unit: string,
    error: string
}

const initialState: initialState = {
    isLoading: false,
    city: '',
    weather: null,
    unit: 'metric',
    error: ''

}

export const weatherReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case WRITE_CITY:
            return {...state, city: action.payload}
        case WRITE_UNIT:
            return {...state, unit: action.payload}
        case WRITE_WEATHER:
            return {...state, weather: action.payload}
        case WRITE_ERROR:
            return {...state, error: action.payload}
        case TOGGLE_WEATHER_LOADER:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}

export const toggleWeatherLoader = (bool: boolean) => ({
    type: TOGGLE_WEATHER_LOADER,
    payload: bool
})
