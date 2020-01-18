import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCity, updateCheckedCities, updatecurrentWeather } from '../../actions';
import CitiesList from '../CitiesList';
import WeatherList from '../WeatherList';
import "./styles.scss";


const API_URL = 'http://api.weatherstack.com/current';
const ACCESS_KEY = 'de1cd2ffe56407e968c1bb8b587475e6';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleCheckboxToggel = this.handleCheckboxToggel.bind(this);
        this.handleGetWeather = this.handleGetWeather.bind(this);
    }

    componentDidMount() {
        const { weather } = this.props;

        weather.forEach((weatherObj) => {
            this.fetchData(weatherObj.city);
        });
    }

    handleCheckboxToggel(index) {
        const { toggleCity } = this.props;
        toggleCity(index);
    }

    handleGetWeather() {
        const { cities, updateCheckedCities } = this.props;
        const weather = this.getCheckedCities(cities);

        updateCheckedCities(weather);

        weather.forEach((weatherObj) => {
            this.fetchData(weatherObj.city);
        });
    }

    getCheckedCities(cities) {
        return (
            cities
            .filter((city) => city.isChecked)
            .map((city) => ({city: city.name, currentWeather: {}}))
        );
    }

    fetchData(city) {
        const { updatecurrentWeather } = this.props;

        fetch(`${API_URL}?access_key=${ACCESS_KEY}&query=${city}`)
        .then(result => result.json())
        .then(
            (result) => {
                updatecurrentWeather(city, result.current);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    render() {
        const { cities, weather } = this.props;
        const showWeatherList = weather && weather.length > 0;

        return (
          <div className="app-container">
              <h1 className="header">The Weather</h1>
              <CitiesList cities={cities} onCheckboxToggel={this.handleCheckboxToggel}/>
              <button className="get-weather-btn" onClick={this.handleGetWeather}>Get Weather</button>
              {showWeatherList && <WeatherList weather={weather} />}
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { cities, weather } = state;

    return {
        cities,
        weather
    };
};

const mapDispatchToProps = { toggleCity, updateCheckedCities, updatecurrentWeather };

export default connect(mapStateToProps, mapDispatchToProps)(App);
