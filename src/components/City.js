import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { removeMagnify } from '../redux/cities';
import style from '../styles/City.module.css';

const City = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { city, handleClick } = props;
  const stateName = city.state ? city.state : null;

  return (
    <div
      className={style.city}
      onClick={() => {
        handleClick(city);
        navigate(`/data`);
        dispatch(removeMagnify());
      }}
    >
      <p>{city.name}</p>
      <p>{city.country}</p>
      <p>{stateName}</p>
    </div>
  );
};

export default City;
