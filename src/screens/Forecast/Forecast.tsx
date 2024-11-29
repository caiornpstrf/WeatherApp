import React, { useCallback, useState } from 'react';
import { useStringHandler } from '../../locale';
import { Button, Header, Input } from '../../components';
import { ContentContainer, MainContainer, Spinner } from './style';
import { ForecastError, ForecastResponse, getForecast } from '../../service';
import { ForecastCard } from './components';
import ErrorCard from './components/ErrorCard/ErrorCard';

export function Forecast() {
  const { text } = useStringHandler('forecast');

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ForecastError | undefined>();
  const [forecast, setForecast] = useState<ForecastResponse | undefined>();

  const getNextFiveHours = useCallback((currentForecast: ForecastResponse) => {
    const {
      forecast: {
        forecastday: [{ hour }],
      },
    } = currentForecast;

    const currentHour = new Date().getHours();
    const nextFiveHours = hour.filter(({ time }) => {
      const forecastHour = new Date(time).getHours();
      return forecastHour > currentHour && forecastHour <= currentHour + 5;
    });

    return nextFiveHours;
  }, []);

  const resetScreenStates = useCallback(() => {
    setInputValue('');
    setError(undefined);
    setForecast(undefined);
  }, []);

  const attemptFetchForecast = useCallback(async () => {
    setIsLoading(true);
    resetScreenStates();

    const [err, response] = await getForecast({ location: inputValue });

    if (err) {
      setError(err);
      setIsLoading(false);
      return;
    }

    const nextForecast = response!;
    const nextFiveHours = getNextFiveHours(nextForecast);
    nextForecast.forecast.forecastday[0].hour = nextFiveHours;

    setForecast(response);
    setIsLoading(false);
  }, [getNextFiveHours, inputValue, resetScreenStates]);

  return (
    <>
      <Header title={text('title')} />
      <MainContainer>
        <ContentContainer>
          <Input
            testID="forecast-input"
            placeholder={text('inputPlaceholder')}
            value={inputValue}
            onChangeText={nextValue => setInputValue(nextValue)}
          />
          {forecast && <ForecastCard {...forecast} />}
          {isLoading && <Spinner testID="forecast-spinner" />}
          {error && <ErrorCard code={error} />}
          <Button
            label={text('search')}
            onPress={attemptFetchForecast}
            disabled={isLoading}
          />
        </ContentContainer>
      </MainContainer>
    </>
  );
}
