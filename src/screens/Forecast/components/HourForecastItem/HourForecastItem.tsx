import React from 'react';
import { ConditionIcon, Label, MainContainer } from './style';
import { formatTime } from '../../../../helpers';
import { Hour } from '../../../../service';
import { useStringHandler } from '../../../../locale';

export type HourForecastItemProps = Hour;

export function HourForecastItem({
  time,
  temp_c,
  condition: { icon },
}: HourForecastItemProps) {
  const { text } = useStringHandler('forecast');
  return (
    <MainContainer>
      <Label>{text('temperature', { temp_c: Math.round(temp_c) })}</Label>
      <ConditionIcon
        source={{
          // The API doesn't return protocol
          uri: `https:${icon}`,
        }}
      />
      <Label>{formatTime(time)}</Label>
    </MainContainer>
  );
}
