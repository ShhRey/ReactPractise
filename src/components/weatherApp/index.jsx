import { useEffect, useState } from "react";
import SearchLoc from "./search";
import './styles.css';

// Global Utility functions
const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);
const kelvinToFahrenheit = (kelvin) => ((kelvin - 273.15) * 9 / 5 + 32).toFixed(2);

export default function WeatherApp() {
    const [search, setSearch] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    // Handle API Loading through states
    const [loading, setLoading] = useState(false);
    // "C" for Celsius, "F" for Fahrenheit
    const [unit, setUnit] = useState("C");

    // Function to Fetch Weather Data through Open Source API: openweathermap.org
    async function fetchWeatherData(param) {
        try {
            setLoading(true);
            // b4ba32de85d3a2a52203825b22bec91d
            const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=`);
            const result = await resp.json();
            console.log(result);

            // If Data is Fetched store in State
            if (result) {
                setWeatherData(result);
                setLoading(false);
            }
        }
        // Error Handling using try-catch block
        catch (e) {
            setLoading(false);
            console.log("Error: ", e)
        }
    }

    // Function to call API only when Search is clicked
    function handleSearch() {
        fetchWeatherData(search);
    }

    // useEffect is used to call API only once when requested
    useEffect(() => {
        fetchWeatherData("Newark");
    }, []);

    // Function to gather Current DateTime of the Request
    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }

    // Function to convert temperatures into Standard Units
    function convertTemperature(kelvin) {
        return unit === "C" ? kelvinToCelsius(kelvin) : kelvinToFahrenheit(kelvin);
    }

    return (
        <div className="wapp-container">
            <h2>Weather App</h2>
            <SearchLoc search={search} setSearch={setSearch} handleSearch={handleSearch} />
            <div className="temp-unit-container">
                <button onClick={() => setUnit("C")}>Celsius</button>
                <button onClick={() => setUnit("F")}>Fahrenheit</button>
            </div>
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
                            <div className="temp-desc">
                                <span>Current Temp: {convertTemperature(weatherData?.main?.temp)}°{unit}</span>
                                <span>Feels Like: {convertTemperature(weatherData?.main?.feels_like)}°{unit}</span>
                            </div>
                            <div className="temp-desc">
                                <span>Max Temp: {convertTemperature(weatherData?.main?.temp_max)}°{unit}</span>
                                <span>Min Temp: {convertTemperature(weatherData?.main?.temp_min)}°{unit}</span>
                            </div>
                        </div>
                        <div className="result-wind">
                            <span>Wind Speed: {weatherData?.wind?.speed} / mph</span>
                            <span>Wind Direction: {weatherData?.wind?.deg} °</span>
                        </div>
                    </div>
            }
        </div>
    )
}