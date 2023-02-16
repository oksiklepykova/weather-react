import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from 'axios';
import './Weather.css';

export default function Weather(props) {
   
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
      setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        date: new Date(response.data.dt * 1000),
        humidity: response.data.main.humidity,
        iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        wind: response.data.wind.speed,
        city: response.data.name
      });
    }

     function search() {
        const apiKey = "7de8edc4ed814aeb0a4e486a9d398f79";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
     }

    function handleSubmit(event) {
        event.preventDefault();
        search(city);
    }

    function handleCityChange(event){
       setCity(event.target.value);
    }

    if (weatherData.ready) {
       return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
               <div className="row">
                  <div className="col-9">
                      <input type="search" 
                             placeholder="Enter a city.." 
                             className="form-control" 
                             autoFocus="on"
                             onChange={handleCityChange} />
                  </div>
                  <div className="col-3">
                       <button type="Submit" value="Search" className="btn btn-primary w-100">Search</button>
                  </div>
               </div>
            </form>
            <WeatherInfo data={weatherData} />
            <div className="row mt-3">
                <div className="col-2">
                    <h6>Thu</h6>
                    <ul>
                        <li><img scr="http://openweathermap.org/img/wn/10d@2x.png" alt="Sunny" /></li>
                        <li>8° 1°</li>
                    </ul>
                </div><div className="col-2">
                    <h6>Fri</h6>
                    <ul>
                        <li><img scr="http://openweathermap.org/img/wn/10d@2x.png" alt="Sunny" /></li>
                        <li>8° 4°</li>
                    </ul>
                </div>
                <div className="col-2">
                    <h6>Sat</h6>
                    <ul>
                        <li><img scr="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="Rain" /></li>
                        <li>8° 4°</li>
                    </ul>
                </div>
                <div className="col-2">
                    <h6>San</h6>
                    <ul>
                        <li><img scr="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="Rain" /></li>
                        <li>6° / 0°</li>
                    </ul>
                </div>
                <div className="col-2">
                    <h6>Mon</h6>
                    <ul>
                        <li><img scr="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="Snow" /></li>
                        <li>3° 2°</li>
                    </ul>
                </div>
            </div>
        </div>
      );
    } else {
      search();
      return "Loading...";
    }
}
    
    
 /*   const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});

    function displayWeather(response) {
        setLoaded(true); 
        setWeather({
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "7de8edc4ed814aeb0a4e486a9d398f79";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayWeather);
    }
    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Enter a city.." onChange={updateCity} />
            <button type="Submit">Search</button>
        </form>
    );

    if (loaded) {  
        return (
            <div className="Weather">
                {form}
                <ul>
                    <li>Temperature: {Math.round(weather.temperature)}°C</li>
                    <li>Description: {weather.description}</li>
                    <li>Humidity: {weather.humidity}%</li>
                    <li>Wind: {weather.wind}km/h</li>
                    <li>
                        <img src={weather.icon} alt={weather.description} />
                    </li>
                </ul>
            </div>
        );
    } else {
        return form;
    } */

