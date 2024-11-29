import { HourForecastItem } from '../../../../src/screens/Forecast/components/HourForecastItem';
import { renderGenericComponent } from '../../../utils';

describe('HourForecastItem tests', () => {
  const renderHourForecastItem = () =>
    renderGenericComponent(HourForecastItem, {
      time: '2021-08-12 12:00',
      temp_c: 23,
      condition: { icon: 'icon', text: 'Sunny', code: 1000 },
    });

  it('Should render correctly', () => {
    const {
      component: { getByText },
    } = renderHourForecastItem();

    expect(getByText('23°C')).toBeDefined();
    expect(getByText('12:00 PM')).toBeDefined();
  });
});
