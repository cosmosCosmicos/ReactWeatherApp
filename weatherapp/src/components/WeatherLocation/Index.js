import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData/Index';
import './style.css' 
import PropTypes from 'prop-types';
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
      } from './../../Constans/weather';

const data = {
      temperature: 20,
      weatherState: 'NightRainMix',
      humidity: 80,
      wind: '10 m/s',
};      

// const data2 = {
//       temperature: 10,
//       weatherState: 'DayRainMix',
//       humidity: 80,
//       wind: '30 m/s',
// };  

const location = 'Santiago,cl';
const apiKey ='7cb3bacacff98e97db6ce46d3b2ce6d4';
const apiWeather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
//const apiWeather = "https://jsonplaceholder.typicode.com/users";

class WeatherLocation extends Component {

      state = {
            data:data,
            city:'Santiago'
      };

      getWeatherState = weather => {
            return DayCloudyHigh;
      }

      getData = (weatherData) =>{
            const {humidity,temp} = weatherData.main;
            const {speed} = weatherData.wind;
            const weatherState = this.getWeatherState(this.weather);
            const data = {
                  humidity,
                  temperature: temp,
                  weatherState,
                  wind: `${speed} m/s`,
            }
            return data;
      };
      

      handleUpdateClick = () => {            
            fetch(apiWeather)
                  .then( data => {
                        console.log(apiWeather);
                                     
                        console.log(data);
                        return data.json();
                  }).then(weatherData => {
                        debugger;
                        const data = this.getData(weatherData);
                        this.setState({data});
                        
                  });     
                  
      }

      render = () =>  {
            const {city,data} = this.state;
            return (
                  <div className='weatherLocationCont'> 
                        <Location  city={city}/> 
                        <WeatherData data={data}/>
                        <button onClick={this.handleUpdateClick}>Actualizar</button>
                  </div>
            );
            
      };
}

Location.propTypes = {
      city: PropTypes.string.isRequired,
};

export default WeatherLocation;