import { combineReducers } from 'redux';
import { TOGGLE_CITY, UPDAT_CHECKED_CITIES, UPDAT_CURRENT_WEATHER } from '../actions/actionTypes.js';

const initialState = {
    cities: [
        {name: 'Berlin', isChecked: false},
        {name: 'Buenos Aires', isChecked: false},
        {name: 'Cape Town', isChecked: false},
        {name: 'London', isChecked: false},
        {name: 'Moscow', isChecked: false},
        {name: 'New York', isChecked: false},
        {name: 'Sydney', isChecked: false},
        {name: 'Tel aviv', isChecked: false},
        {name: 'Tokyo', isChecked: false},
        {name: 'Toronto', isChecked: false}
    ],
    weather: []
}

const citiesReducer = (state = initialState.cities, action) => {
    switch (action.type) {
        case TOGGLE_CITY:
            return state.map((city, index) => (
                index === action.index ?
                    {...city, isChecked: !city.isChecked}
                    :
                    city
            ));
        default:
            return state;
    }
};

const weatherReducer = (state = initialState.weather, action) => {
    switch (action.type) {
        case UPDAT_CHECKED_CITIES:
            return action.weather;
        case UPDAT_CURRENT_WEATHER:
            const { city, currentWeather } = action;
            return state.map((weatherObj) => (
                weatherObj.city === city ?
                {...weatherObj, currentWeather}
                :
                weatherObj
            ));
        default:
            return state;
    }
}

const rootReducer = combineReducers({
  cities: citiesReducer,
  weather: weatherReducer
});

export default rootReducer
