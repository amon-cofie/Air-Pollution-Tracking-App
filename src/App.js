import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import City from './components/City';
import { nanoid } from '@reduxjs/toolkit';
import {
  displayInput,
  removeInput,
  displayMagnify,
  fetchCities,
} from './redux/cities';
import { fetchPollutionData } from './redux/pollutionData';
import { Routes, Route, useNavigate } from 'react-router';
import DataPage from './components/DataPage';
import style from './styles/App.module.css';

const App = () => {
  const allowSearch = useSelector((state) => state.cities.displayMagnify);
  const navigate = useNavigate();
  const [inputData, setInputData] = useState('');
  const [cityCoordinate, setCityCoordinate] = useState({});
  const inputField = useSelector((state) => state.cities.displayInput);
  const cities = useSelector((state) => state.cities.cities);

  const fetchedData = useSelector((state) => state.pollutionData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities('London'));
  }, []);

  const handleClick = (obj) => {
    dispatch(fetchPollutionData(obj));
    setCityCoordinate(obj);
  };

  return (
    <>
      <header className={style.header}>
        <i
          className="fa-solid fa-chevron-left"
          onClick={() => {
            dispatch(displayMagnify());
            navigate(`/`);
          }}
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
              className={style.inputField}
              type="text"
              placeholder="Enter City Name"
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
          ) : null}
        </form>
        {allowSearch ? (
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => {
              dispatch(displayInput());
            }}
          ></i>
        ) : null}
        <i className="fas fa-cog"></i>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <section className={style.cityContainer}>
                <div className={style.cityFlexContainer}>
                  {cities.length === 0 ? (
                    <h2 className={style.loading}>Loading</h2>
                  ) : (
                    cities.map((city) => (
                      <City
                        key={nanoid()}
                        city={city}
                        handleClick={handleClick}
                      />
                    ))
                  )}
                </div>
              </section>
            }
          />
          <Route
            path="/data"
            element={
              <section>
                {fetchedData.isLoading ? (
                  <h2 className={style.loading}>Loading</h2>
                ) : (
                  <DataPage
                    cityCoordinate={cityCoordinate}
                    pollutionData={fetchedData.pollution}
                  />
                )}
              </section>
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
