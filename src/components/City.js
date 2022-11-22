import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPollutionData } from '../redux/pollutionData';
import { useNavigate } from 'react-router';

const City = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { city, handleClick } = props;
  const stateName = city.state ? city.state : '';

  // handleClick(city);

  useEffect(() => {
    dispatch(fetchPollutionData());
  }, []);

  // console.log(city);

  // const AQI = pollutionData.list[0].main.aqi;

  return (
    <div
      onClick={() => {
        handleClick(city);
        navigate(`/data`);
      }}
    >
      <p>{city.name}</p>
      <p>{city.country}</p>
      <p>{stateName}</p>
    </div>
  );
};

export default City;
