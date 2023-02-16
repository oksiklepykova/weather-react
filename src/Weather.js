import React from "react";
//import axios from 'axios';
import './Weather.css';

export default function Weather() {
    return (
        <div className="Weather">
            <form>
               <div className="row">
                  <div className="col-9">
                      <input type="search" 
                             placeholder="Enter a city.." 
                             className="form-control" />
                  </div>
                  <div className="col-3">
                       <button type="Submit" value="Search" className="btn btn-primary">Search</button>
                  </div>
               </div>
            </form>
            <h1>Lviv</h1>
            <ul>
                <li>Thursday 11:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
               <div className="col-6">
                  <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" />
                  5°C
               </div>
               <div className="col-6">
                   <ul>
                      <li>Humidity: 72%</li>
                      <li>Wind: 14 km/h</li>
                   </ul>
               </div>
            </div>
        </div>
    )
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
}
