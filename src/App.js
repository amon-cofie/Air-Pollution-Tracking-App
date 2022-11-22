import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchCities } from './redux/cities';
import City from './components/City';
import { nanoid } from '@reduxjs/toolkit';
import { displayInput, removeInput } from './redux/cities';
// import { fetchPollutionData } from './redux/pollutionData';
import { Routes, Route } from 'react-router';
import DataPage from './components/DataPage';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const App = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState('');
  const [cityCoordinate, setCityCoordinate] = useState({});
  const inputField = useSelector((state) => state.cities.displayInput);
  const cities = useSelector((state) => state.cities.cities);
  // const pollutionData = useSelector(
  //   (state) => state.pollutionData.pollutionData,
  // );
  const dispatch = useDispatch();

  // let dataArray = [];

  // console.log(cities);

  // cities.forEach((city) => {
  //   const latitude = city.lat;
  //   const longitude = city.lon;
  //   const cityCoordinate = { latitude, longitude };
  //   dataArray.push(cityCoordinate);
  // });

  useEffect(() => {
    dispatch(fetchCities('London'));
    // dispatch(fetchPollutionData())
  }, []);

  const handleClick = (obj) => {
    // const latitude = obj.lat;
    // const longitude = obj.lon;
    // const cityCoordinate = { latitude, longitude };
    setCityCoordinate(obj);
  };

  return (
    <>
      <header>
        <i
          className="fa-solid fa-chevron-left"
          onClick={() => navigate(`/`)}
        ></i>

        {/* <span>{someData}</span> */}
        {/* <span>{pageTitle}</span> */}
        <i className="fas fa-microphone"></i>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(fetchCities(inputData));
            dispatch(removeInput());
            setInputData('');
          }}
        >
          {inputField ? (
            <input
              type="text"
              placeholder="Enter City Name"
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
          ) : null}
        </form>
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={() => {
            dispatch(displayInput());
          }}
        ></i>
        <i className="fas fa-cog"></i>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <section>
                {/* <h2>{cities.length === 0 ? 'No city found' : null} </h2> */}
                {cities.length === 0 ? (
                  <h2>No city found</h2>
                ) : (
                  cities.map((city) => (
                    <City
                      key={nanoid()}
                      city={city}
                      handleClick={handleClick}
                    />
                  ))
                )}
              </section>
            }
          />
          <Route
            path="/data"
            element={
              <section>
                <DataPage cityCoordinate={cityCoordinate} />
              </section>
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
