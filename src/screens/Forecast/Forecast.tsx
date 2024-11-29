import React, { useCallback, useEffect, useState } from 'react';
import { useStringHandler } from '../../locale';
import { Header, Input } from '../../components';
import { MainContainer } from './style';

const DEBOUNCE_TIME = 1000;

export function Forecast() {
  const { text } = useStringHandler('forecast');

  const [inputValue, setInputValue] = useState('');

  const attemptDataFetch = useCallback(() => {
    console.log('Debounced value:', inputValue);
  }, [inputValue]);

  useEffect(() => {
    const timeout = setTimeout(attemptDataFetch, DEBOUNCE_TIME);
    return () => clearTimeout(timeout);
  }, [attemptDataFetch]);

  return (
    <>
      <Header title={text('title')} />
      <MainContainer>
        <Input
          testID="forecast-input"
          placeholder={text('inputPlaceholder')}
          value={inputValue}
          onChangeText={nextValue => setInputValue(nextValue)}
        />
      </MainContainer>
    </>
  );
}
