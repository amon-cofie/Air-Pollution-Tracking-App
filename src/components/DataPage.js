import React from 'react';
import style from '../styles/DataPage.module.css';
import { useSelector } from 'react-redux';
import {
  scoreCO,
  scoreNH3,
  scoreNO2,
  scoreO3,
  scorePM10,
  scorePM25,
  scoreSO2,
} from '../logic/logic';

const DataPage = ({ cityCoordinate, pollutionData }) => {
  const pollutes = pollutionData.pollution.list[0].components;
  console.log(pollutes);
  const extras = useSelector((state) => state.extraData.allCountries);

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
    <div className={style.mainDataContainer}>
      <div className={style.prelimData}>
        <div className={style.prelimCityData}>
          <div className={style.cityAndCountry}>
            <p className={style.cityName}>{cityCoordinate.name}</p>
            <p className={style.cityCountry}>
              {cityCoordinate.country}{' '}
              <span>{fetchFlag(cityCoordinate.country)}</span>
            </p>
          </div>
          <p className={style.cityState}>{cityCoordinate.state}</p>
        </div>
        <div className={style.cityAqiData}>
          AQI: {pollutionData.pollution.list[0].main.aqi}
        </div>
      </div>
      <div className={style.dataTableContainer}>
        <table className={style.dataTable}>
          <thead>
            <tr>
              <th>Pollutant</th>
              <th>Concentration</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CO</td>
              <td>{pollutes.co}</td>
              <td>{scoreCO(pollutes.co)}</td>
            </tr>
            <tr>
              <td>
                NH<sub>3</sub>
              </td>
              <td>{pollutes.nh3}</td>
              <td>{scoreNH3(pollutes.nh3)}</td>
            </tr>
            <tr>
              <td>NO</td>
              <td>{pollutes.no}</td>
              <td>{'Rare pollutant'}</td>
            </tr>
            <tr>
              <td>
                NO<sub>2</sub>
              </td>
              <td>{pollutes.no2}</td>
              <td>{scoreNO2(pollutes.no2)}</td>
            </tr>
            <tr>
              <td>
                O<sub>3</sub>
              </td>
              <td>{pollutes.o3}</td>
              <td>{scoreO3(pollutes.o3)}</td>
            </tr>
            <tr>
              <td>
                PM<sub>2.5</sub>
              </td>
              <td>{pollutes.pm2_5}</td>
              <td>{scorePM25(pollutes.pm2_5)}</td>
            </tr>
            <tr>
              <td>
                PM<sub>10</sub>
              </td>
              <td>{pollutes.pm10}</td>
              <td>{scorePM10(pollutes.pm10)}</td>
            </tr>
            <tr>
              <td>
                SO<sub>2</sub>
              </td>
              <td>{pollutes.so2}</td>
              <td>{scoreSO2(pollutes.so2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={style.coverFoot}></div>
    </div>
  );
};

export default DataPage;
