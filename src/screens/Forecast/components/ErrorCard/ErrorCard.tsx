import React from 'react';
import { ErrorIcon, ErrorText, MainContainer } from './style';
import { useStringHandler } from '../../../../locale';
import { ForecastError } from '../../../../service';

export type ErrorCardProps = {
  code: ForecastError;
};

export function ErrorCard({ code }: ErrorCardProps) {
  const { text } = useStringHandler('forecast');
  return (
    <MainContainer testID="forecast-error-card">
      <ErrorIcon />
      <ErrorText>
        {text(`error.${code}`, undefined, 'error.9999')}
      </ErrorText>
    </MainContainer>
  );
}
