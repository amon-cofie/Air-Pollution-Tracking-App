import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPollutionData } from '../redux/pollutionData';

const DataPage = ({ cityCoordinate }) => {
  const dispatch = useDispatch();
  const pollutionData = useSelector(
    (state) => state.pollutionData.pollutionData,
  );
  console.log(cityCoordinate);

  useEffect(() => {
    dispatch(fetchPollutionData(cityCoordinate));

    // fetchPollutionData(cityCoordinate);
  }, []);

  console.log(pollutionData);

  return (
    <div>
      <h1>Under Construction</h1>
    </div>
  );
};

export default DataPage;
