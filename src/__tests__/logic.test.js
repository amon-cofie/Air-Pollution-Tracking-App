import {
  scoreCO,
  scoreNH3,
  scoreNO2,
  scoreO3,
  scorePM10,
  scorePM25,
  scoreSO2,
} from '../logic/logic';

test('scoreCO function works correctly', () => {
  expect(scoreCO(100)).toBe('Good');
  expect(scoreCO(200)).toBe('Satisfactory');
  expect(scoreCO(1000)).toBe('Moderate');
  expect(scoreCO(1700)).toBe('Poor');
  expect(scoreCO(3400)).toBe('Severe');
  expect(scoreCO(3401)).toBe('Hazardous');
});

test('scoreNH3 function works correctly', () => {
  expect(scoreNH3(200)).toBe('Good');
  expect(scoreNH3(400)).toBe('Satisfactory');
  expect(scoreNH3(800)).toBe('Moderate');
  expect(scoreNH3(1200)).toBe('Poor');
  expect(scoreNH3(1800)).toBe('Severe');
  expect(scoreNH3(1801)).toBe('Hazardous');
});

test('scoreNO2 function works correctly', () => {
  expect(scoreNO2(40)).toBe('Good');
  expect(scoreNO2(80)).toBe('Satisfactory');
  expect(scoreNO2(180)).toBe('Moderate');
  expect(scoreNO2(280)).toBe('Poor');
  expect(scoreNO2(400)).toBe('Severe');
  expect(scoreNO2(401)).toBe('Hazardous');
});

test('scoreO3 function works correctly', () => {
  expect(scoreO3(50)).toBe('Good');
  expect(scoreO3(100)).toBe('Satisfactory');
  expect(scoreO3(168)).toBe('Moderate');
  expect(scoreO3(208)).toBe('Poor');
  expect(scoreO3(748)).toBe('Severe');
  expect(scoreO3(749)).toBe('Hazardous');
});

test('scorePM10 function works correctly', () => {
  expect(scorePM10(50)).toBe('Good');
  expect(scorePM10(100)).toBe('Satisfactory');
  expect(scorePM10(250)).toBe('Moderate');
  expect(scorePM10(350)).toBe('Poor');
  expect(scorePM10(430)).toBe('Severe');
  expect(scorePM10(431)).toBe('Hazardous');
});

test('scorePM25 function works correctly', () => {
  expect(scorePM25(30)).toBe('Good');
  expect(scorePM25(60)).toBe('Satisfactory');
  expect(scorePM25(90)).toBe('Moderate');
  expect(scorePM25(120)).toBe('Poor');
  expect(scorePM25(250)).toBe('Severe');
  expect(scorePM25(251)).toBe('Hazardous');
});

test('scoreSO2 function works correctly', () => {
  expect(scoreSO2(40)).toBe('Good');
  expect(scoreSO2(80)).toBe('Satisfactory');
  expect(scoreSO2(380)).toBe('Moderate');
  expect(scoreSO2(800)).toBe('Poor');
  expect(scoreSO2(1600)).toBe('Severe');
  expect(scoreSO2(1601)).toBe('Hazardous');
});
