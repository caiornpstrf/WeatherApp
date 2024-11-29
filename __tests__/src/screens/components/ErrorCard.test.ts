import {
  ErrorCard,
  ErrorCardProps,
} from '../../../../src/screens/Forecast/components/ErrorCard';
import { ForecastError } from '../../../../src/service';
import { renderGenericComponent } from '../../../utils';

import locale from '../../../../src/locale/strings.json';

describe('ErrorCard tests', () => {
  const strings = locale.forecast;

  const renderErrorCard = (props?: Partial<ErrorCardProps>) =>
    renderGenericComponent(
      ErrorCard,
      {
        code: ForecastError.NoLocationFound,
      },
      props,
    );

  it('Should render correctly with mapped error', () => {
    const {
      component: { getByText },
    } = renderErrorCard();

    expect(
      getByText(strings.error[ForecastError.NoLocationFound]),
    ).toBeDefined();
  });

  it('Should render correctly with fallback error', () => {
    const {
      component: { getByText },
    } = renderErrorCard({ code: ForecastError.ApiKeyHasBeenDisabled });

    expect(
      getByText(strings.error[ForecastError.InternalApplicationError]),
    ).toBeDefined();
  });
});
