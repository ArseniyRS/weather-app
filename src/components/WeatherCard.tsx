import React from 'react';
import '../styles/weather-card.scss'
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import Loader from "./Loader";

const WeatherCard = () => {
    const {weather, isLoading} = useSelector((state: RootState) => state.weatherReducer)
    return (
        weather ?
            <div className={'weather-card'}>
                <span className={'weather-card__title'}>Current Weather</span>
                <div className="weather__wrapper">
                    <div className="weather-main">
                        <span className={'weather__city'}>{weather.name}</span>
                        <span className={'weather__temp'}>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
                            {/*<i className={`fas fa-${chooseWeatherIcon(weather.weather[0].icon)}`}></i>*/}
                            <span>{weather.main.temp.toFixed(0)}<sup>o</sup></span></span>
                        <span className={'weather__type'}>{weather.weather[0].description}</span>
                    </div>
                    <div className="weather-detail">
                        <span className={'weather__feels-like'}>Feels like {weather.main.feels_like.toFixed(0)}<sup>o</sup></span>
                        <span className={'weather__humidity'}><i className="fas fa-tint" style={{color: '#0E7AF6'}}/>humidity: {weather.main.humidity}</span>
                        <span className={'weather__wind'}><i className="fas fa-wind"/>Wind: {weather.wind.speed}kph</span>
                        <span className={'weather__pressure'}><i className="fas fa-compass"/>pressure: {weather.main.pressure}hPa</span>
                    </div>
                </div>
            </div> : isLoading ? <Loader /> : <p className={'no-weather'}>Select city</p>
    );
};

export default WeatherCard;