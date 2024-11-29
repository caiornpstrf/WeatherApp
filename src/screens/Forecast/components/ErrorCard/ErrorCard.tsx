import React from 'react';
import { ErrorIcon, ErrorText, MainContainer } from './style';
import { useStringHandler } from '../../../../locale';
import { ForecastError } from '../../../../service';

export type ErrorCardProps = {
  code: ForecastError;
};

export default function ErrorCard({ code }: ErrorCardProps) {
  const { text } = useStringHandler('forecast');
  return (
    <MainContainer testID="forecast-error-card">
      <ErrorIcon />
      <ErrorText>
        {text(`error.${code}`, {}, 'error.9999')}
      </ErrorText>
    </MainContainer>
  );
}
