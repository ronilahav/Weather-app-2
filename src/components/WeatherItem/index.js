import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss";

const WeatherItem = ({ weather }) => {
    const { city, currentWeather } = weather;
    const { temperature, weather_descriptions, weather_icons } = currentWeather;
    const icon = weather_icons && weather_icons[0];
    const description = weather_descriptions && weather_descriptions[0];

    return (

        <li className="weather-item">
            <div className="name">{city}</div>
            <div className="weather">
                {icon && <img className="description-icon" src={icon} alt={description}/>}
                {temperature && <span className="temperature">{temperature}&#0176;</span>}
            </div>

        </li>
    );
};

WeatherItem.propTypes = {
    weather: PropTypes.shape({
        city: PropTypes.string,
        currentWeather: PropTypes.object
    })
};

export default WeatherItem;
