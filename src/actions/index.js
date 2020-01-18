import { TOGGLE_CITY, UPDAT_CHECKED_CITIES, UPDAT_CURRENT_WEATHER } from './actionTypes.js';


export const toggleCity = (index) => ({
    type: TOGGLE_CITY,
    index
});

export const updateCheckedCities = (weather) => ({
    type: UPDAT_CHECKED_CITIES,
    weather
});

export const updatecurrentWeather = (city, currentWeather) => ({
    type: UPDAT_CURRENT_WEATHER,
    city,
    currentWeather
});
