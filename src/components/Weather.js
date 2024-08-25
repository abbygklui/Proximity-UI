import React from 'react';
import './Weather.css'; // You'll create this CSS file to style the weather component

const Weather = ({ forecast }) => {
    return (
        <div className="weather-container">
            {forecast.map((hour, index) => (
                <div key={index} className="weather-hour">
                    <div className="weather-time">
                        {hour.time}
                    </div>
                    <div className="weather-temp">
                        <img src={hour.icon} alt="weather icon" className="weather-icon" />
                        {hour.temperature}°C
                    </div>
                </div>
            ))
            }
        </div >
    );
};

export default Weather;
