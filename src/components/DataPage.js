import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPollutionData } from '../redux/pollutionData';
import { useState } from 'react';

const DataPage = ({ cityCoordinate, pollutionData }) => {
  // const [aqiData, setAqiData] = useState('');
  // const dispatch = useDispatch();
  // console.log(pollutionData);
  // const x = useSelector((state) => state.pollutionData);
  // console.log(pollutionData);
  // useEffect(() => {
  // setAqiData(pollutionData.list[0].main.aqi);
  // }, [pollutionData]);

  // useEffect(() => {
  //   if (x.isLoading) {
  //     dispatch(fetchPollutionData());
  //   }
  // }, []);

  console.log(pollutionData);
  // useEffect(() => {
  //   if (pollutionData.length > 0) {
  //     setAqiData(pollutionData.pollutionData.list[0].main.aqi);
  //   }
  // }, [pollutionData.pollutionData]);

  // console.log(pollutionData.pollutionData);

  // if (pollutionData.pollutionData.length > 0) {
  // }

  // console.log(aqiData);
  // if (pollutionData.length > 0) {
  // console.log(pollutionData);
  // if (pollutionData) {
  //   console.log(pollutionData.list[0].main.aqi);
  // }
  return (
    <div>
      <div>
        <p>{cityCoordinate.name}</p>
        <p>{cityCoordinate.country}</p>
        <p>{cityCoordinate.state}</p>

        {/* <div>{aqiData}</div> */}
        <div>AQI: {pollutionData.list[0].main.aqi}</div>
      </div>
    </div>
  );
  // } else {
  //   return <h1>Loading</h1>;
  // }
};

export default DataPage;
