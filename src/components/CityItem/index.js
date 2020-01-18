import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss";

const CityItem = ({ cityName, isChecked, onChange, index }) => {
    return (
        <li className="city-item">
            <input className="checkbox"
                type="checkbox"
                defaultChecked={isChecked}
                onChange={() => onChange(index)} />
            <span className="city-name">{cityName}</span>
        </li>
    );
};

CityItem.defaultProps = {
  isChecked: false
};

CityItem.propTypes = {
    cityName: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CityItem;
