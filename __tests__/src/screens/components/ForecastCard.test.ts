import { ForecastCard } from '../../../../src/screens/Forecast/components';
import { renderGenericComponent } from '../../../utils';

import { mockResponse } from '../../../__mocks__/getForecast.mock';

describe('ForecastCard tests', () => {
  const renderForecastCard = () =>
    renderGenericComponent(ForecastCard, { ...mockResponse });

  it('Should render correctly', () => {
    const {
      component: { getByTestId },
    } = renderForecastCard();

    expect(getByTestId('forecast-card')).toBeDefined();
    expect(getByTestId('forecast-hour-item-0')).toBeDefined();
    expect(getByTestId('forecast-hour-item-23')).toBeDefined();
  });
});
