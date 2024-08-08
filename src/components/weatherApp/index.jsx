import { useEffect, useState } from "react";
import SearchLoc from "./search";
import './styles.css';

export default function WeatherApp() {
    const [search, setSearch] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchWeatherData(param) {
        try {
            setLoading(true);
            const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=`);
            const result = await resp.json();
            console.log(result);

            if (result) {
                setWeatherData(result);
                setLoading(false);
            }
        }
        catch (e) {
            setLoading(false);
            console.log("Error: ", e)
        }
    }

    function handleSearch() {
        fetchWeatherData(search)
    }

    useEffect(() => {
        fetchWeatherData("Newark");
    }, []);

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    return (
        <div className="wapp-container">
            <h2>Weather App</h2>
            <SearchLoc search={search} setSearch={setSearch} handleSearch={handleSearch} />
            {
                loading ?
                    <div>Loading Data! Please Wait...</div>
                    :
                    <div className="result-container">
                        <div className="city-name">
                            <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
                        </div>
                        <div className="result-date">
                            <span>{getCurrentDate()}</span>
                        </div>
                        <div className="result-desc">
                            {weatherData && weatherData.weather && weatherData.weather.length > 0 ? (
                                weatherData.weather.map((weatherItem, index) => (
                                    <div key={index}>
                                        <span className="desc-heading">{weatherItem.main}</span> : <span>{weatherItem.description}</span>
                                    </div>
                                ))
                            ) : (
                                <span>No weather data available</span>
                            )}
                            <span>Humidity: {weatherData?.main?.humidity}</span>
                            <span>Pressure: {weatherData?.main?.pressure}</span>
                        </div>
                        <div className="result-temp">
                            <span>Current Temp: {weatherData?.main?.temp}</span>
                            <span>Feels Like: {weatherData?.main?.feels_like}</span>
                            <span>Max Temp: {weatherData?.main?.temp}</span>
                            <span>Min temp: {weatherData?.main?.temp}</span>
                        </div>
                        <div className="result-wind">
                        <span>Wind Speed: {weatherData?.wind?.speed}</span>
                        <span>Wind Deg: {weatherData?.wind?.deg}</span>
                        </div>
                    </div>
            }
        </div>
    )
}