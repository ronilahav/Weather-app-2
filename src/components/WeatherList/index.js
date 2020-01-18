import React from 'react';
import PropTypes from 'prop-types';
import WeatherItem from '../WeatherItem';
import "./styles.scss";

const WeatherList = ({ weather }) => {
    return (
        <div className="weather-list">
            <h2 className="header">This is The weather in:</h2>
            <ul>
                {renderWeatherItems(weather)}
            </ul>
        </div>
    );
}

const renderWeatherItems = (weather) => {
    return weather.map((weatherObj, index) => (
        <WeatherItem key={index} weather={weatherObj}/>
     ));
}

WeatherList.defaultProps = {
    weather: []
};

WeatherList.propTypes = {
    weather: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string,
        currentWeather: PropTypes.object
    }))
};

export default WeatherList;
