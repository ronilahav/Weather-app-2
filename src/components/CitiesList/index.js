import React from 'react';
import PropTypes from 'prop-types';
import CityItem from '../CityItem';
import "./styles.scss";

const CitiesList = ({ cities, onCheckboxToggel }) => {
    return (
        <div className="cities-list">
            <h2 className="header">Cities:</h2>
            <ul>
                {renderCityItems(cities, onCheckboxToggel)}
            </ul>
        </div>
    );
}

const renderCityItems = (cities, onCheckboxToggel) => {
    return cities.map((city, index) => (
        <CityItem key={index}
         index={index}
         cityName={city.name}
         onChange={onCheckboxToggel}/>
     ));
}

CitiesList.defaultProps = {
    cities: [],
    onCheckboxToggel: () => null
};

CitiesList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        isChecked: PropTypes.bool
    })),
    onCheckboxToggel: PropTypes.func.isRequired
};

export default CitiesList;
