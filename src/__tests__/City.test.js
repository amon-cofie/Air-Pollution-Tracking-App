import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import City from '../components/City';

test('City component renders correctly', () => {
  const city = {};
  const snap = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <City city={city} />
      </BrowserRouter>
    </Provider>,
  );
  expect(snap).toMatchSnapshot();
});
