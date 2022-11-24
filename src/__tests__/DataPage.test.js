import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import DataPage from '../components/DataPage';

test('City component renders correctly', () => {
  const cityCoordinate = {};
  const fetchedData = {
    pollution: {
      list: [{ components: {}, main: { aqi: 1 } }],
    },
  };
  const snap = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <DataPage cityCoordinate={cityCoordinate} pollutionData={fetchedData} />
      </BrowserRouter>
    </Provider>,
  );
  expect(snap).toMatchSnapshot();
});
