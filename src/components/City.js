import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPollutionData } from '../redux/pollutionData';

const City = (props) => {
  const dispatch = useDispatch();
  const { city, dataArray } = props;
  const stateName = city.state ? city.state : '';

  useEffect(() => {
    dispatch(fetchPollutionData(dataArray));
  }, []);

  // console.log(pollutionData);

  // const AQI = pollutionData.list[0].main.aqi;

  return (
    <div>
      <p>{city.name}</p>
      <p>{city.country}</p>
      <p>{stateName}</p>
      {/* <p>{AQI}</p> */}
    </div>
  );
};

export default City;
