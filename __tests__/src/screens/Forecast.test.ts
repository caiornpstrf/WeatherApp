import { fireEvent, act, waitFor } from '@testing-library/react-native';

import * as Request from '../../../src/service/getForecast';
import { Forecast } from '../../../src/screens/Forecast/Forecast';
import { renderGenericComponent } from '../../utils';
import { mockResponse } from '../../__mocks__/getForecast.mock';
import { Keyboard } from 'react-native';

jest.mock('../../../src/service/getForecast');
describe('Forecast tests', () => {
  const getForecastSpy = jest.spyOn(Request, 'getForecast');
  const keyboardSpy = jest.spyOn(Keyboard, 'dismiss');
  const renderForecast = () =>
    renderGenericComponent(Forecast, { ...mockResponse });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly in the initial state', () => {
    const {
      component: { getByTestId, queryByTestId },
    } = renderForecast();

    expect(getByTestId('forecast-input')).toBeDefined();
    expect(queryByTestId('forecast-card')).toBeNull();
    expect(queryByTestId('forecast-error-card')).toBeNull();
    expect(queryByTestId('forecast-spinner')).toBeNull();
  });

  it('Should render forecast card when forecast is fetched', async () => {
    getForecastSpy.mockResolvedValue([undefined, mockResponse]);
    const {
      component: { getByTestId },
    } = renderForecast();

    act(() => {
      fireEvent.press(getByTestId('forecast-button'));
    });

    await waitFor(() => {
      expect(getForecastSpy).toHaveBeenCalledTimes(1);
      expect(getByTestId('forecast-card')).toBeDefined();
    });
  });

  it('Should render error card when it fails to fetch forecast', async () => {
    getForecastSpy.mockResolvedValue([
      Request.ForecastError.NoLocationFound,
      undefined,
    ]);
    const {
      component: { getByTestId },
    } = renderForecast();

    act(() => {
      fireEvent.press(getByTestId('forecast-button'));
    });

    await waitFor(() => {
      expect(getForecastSpy).toHaveBeenCalledTimes(1);
      expect(getByTestId('forecast-error-card')).toBeDefined();
    });
  });

  it('Should render spinner when fetching forecast', async () => {
    getForecastSpy.mockResolvedValue([undefined, mockResponse]);
    const {
      component: { getByTestId },
    } = renderForecast();

    act(() => {
      fireEvent.press(getByTestId('forecast-button'));
    });

    await waitFor(() => {
      expect(getForecastSpy).toHaveBeenCalledTimes(1);
      expect(getByTestId('forecast-spinner')).toBeDefined();
    });
  });

  it('Should interact with input', () => {
    const {
      component: { getByTestId },
    } = renderForecast();

    const value = 'São Paulo';
    const input = getByTestId('forecast-input');
    act(() => {
      fireEvent.changeText(input, value);
    });
    expect(input.props.value).toBe(value);
  });

  it('Should dismiss keyboard when fetching forecast', async () => {
    getForecastSpy.mockResolvedValue([undefined, mockResponse]);
    const {
      component: { getByTestId },
    } = renderForecast();

    act(() => {
      fireEvent.press(getByTestId('forecast-button'));
    });

    await waitFor(() => {
      expect(keyboardSpy).toHaveBeenCalledTimes(1);
    });
  });
});
