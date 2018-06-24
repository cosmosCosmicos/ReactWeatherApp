import React from 'react';
import WeatherIcon from 'react-open-weather-icons';
import PropTypes from 'prop-types';
import './style.css';
import {
DaySunny,NightClear,
DayCloudy,NightCloudy,
DayCloudyHigh,NightCloudyHigh,
DayOvercast,NightPartlyCloudy,
DayShowers,NightShowers,
DayRain,NightRain,
DayThunderstorm,NightThunderstorm ,
DaySnow,NightSnow,DayRainMix,
NightRainMix
} from './../../../Constans/weather';

const stateToIconName = weatherState => {    
    switch(weatherState){
        case DaySunny:
            return "01d";
        case NightClear:
            return "01n";
        case DayCloudy:
            return "02d";
        case NightCloudy:
            return "02n";
        case DayCloudyHigh:
            return "03d";
        case NightCloudyHigh:
            return "03n";
        case DayOvercast:
            return "04d";
        case NightPartlyCloudy:
            return "04n";
        case DayShowers:
            return "09d";    
        case NightShowers:
            return "09n";
        case DayRain:
            return "10d";
        case NightRain:
            return "10n";
        case DayThunderstorm:
            return "11d";
        case NightThunderstorm:
            return "11n";
        case DaySnow:
            return "13d";
        case NightSnow:
            return "13n";
        case DayRainMix:
            return "50d";
        case NightRainMix:
            return "50n";
        default:
            return "01d";
    }
};

const getWeatherIcon = weatherState =>{
    return (<WeatherIcon className='wicon' name={stateToIconName(weatherState)}  size="4x"/>);
}
 
const WeatherTemperature = ({temperature, weatherState}) => (
    <div className='weatherTemperatureCont'>         
        {getWeatherIcon(weatherState)}   
        <span className='temperature'>{`${temperature} `}   </span>
        <span className='temperatureType'>C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;