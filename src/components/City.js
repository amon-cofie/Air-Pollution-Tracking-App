import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { removeMagnify } from '../redux/cities';
import style from '../styles/City.module.css';

const City = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const extras = useSelector((state) => state.extraData.allCountries);

  const { city, handleClick } = props;
  const stateName = city.state ? city.state : null;

  const fetchFlag = (str) => {
    let flag = '';
    extras.forEach((country) => {
      if (country.cca2 === str) {
        flag = country.flag;
      }
    });
    return flag;
  };

  return (
    <div
      className={style.city}
      onClick={() => {
        handleClick(city);
        navigate('/data');
        dispatch(removeMagnify());
      }}
    >
      <p className={style.cityName}>{city.name}</p>
      <p className={style.countryAlpha2}>
        {city.country}
        {' '}
        <span>{fetchFlag(city.country)}</span>
      </p>
      <p className={style.stateName}>{stateName}</p>
    </div>
  );
};

export default City;
