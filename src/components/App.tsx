import React, {useEffect} from 'react';
import '../styles/App.scss';
import CitySearch from "./CitySearch";
import SelectUnit from "./SelectUnit";
import WeatherCard from './WeatherCard';
import {useDispatch, useSelector} from "react-redux";
import {FETCH_GET_WEATHER, FETCH_GET_WEATHER_BY_LOCATION, WRITE_CITY, WRITE_WEATHER} from "../constants/weather";
import {weatherReducer} from "../store/reducers/weatherReducer";
import {RootState} from "../store/store";

function App() {
    const dispatch = useDispatch()
    const {city,unit,error} = useSelector((state: RootState) => state.weatherReducer)
    useEffect(()=>{
        if(error)
            alert(error)
    },[error])
    useEffect(() => {
        if (city)
            dispatch({type: FETCH_GET_WEATHER, payload: {city, unit}})
    }, [city, unit])
    useEffect(()=>{
        if(localStorage.getItem('weather') || localStorage.getItem('city')){
            dispatch({type: WRITE_WEATHER, payload: JSON.parse(localStorage.getItem('weather') as string)})
            dispatch({type: WRITE_CITY, payload: JSON.parse(localStorage.getItem('city') as string)})
        }else {
            dispatch({type: FETCH_GET_WEATHER_BY_LOCATION})
        }
    },[])
    return (
        <div className="App container">
            <div className="weather-manager">
                <CitySearch/>
                <SelectUnit/>
            </div>
            <WeatherCard/>
        </div>
    );
}

export default App;
