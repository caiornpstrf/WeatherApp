import React from 'react';
import { HourForecastItem } from '../HourForecastItem';
import {
  ConditionIcon,
  HourItemContainer,
  ItemSpacer,
  Location,
  MainContainer,
  ScrollContainer,
  SectionContainer,
  Temperature,
  TemperatureContainer,
} from './style';
import { ForecastResponse } from '../../../../service';
import { useStringHandler } from '../../../../locale';
import {} from '../HourForecastItem/style';

export type ForecastCardProps = ForecastResponse;

export function ForecastCard({
  current: { temp_c, condition },
  location: { name, country },
  forecast: {
    forecastday: [{ hour }],
  },
}: ForecastCardProps) {
  const { text } = useStringHandler('forecast');

  return (
    <MainContainer testID="forecast-card">
      <SectionContainer>
        <TemperatureContainer>
          <Temperature>
            {text('temperature', { temp_c: Math.round(temp_c) })}
          </Temperature>
          <Location>
            {text('location', {
              name,
              country,
            })}
          </Location>
        </TemperatureContainer>
        <ConditionIcon
          source={{
            // The API doesn't return protocol
            uri: `https:${condition.icon}`,
          }}
        />
      </SectionContainer>
      <SectionContainer mt="16px">
        <ScrollContainer>
          {hour.map((item, index) => (
            <HourItemContainer
              key={item.time}
              testID={`forecast-hour-item-${index}`}>
              <HourForecastItem {...item} />
              {index < hour.length && <ItemSpacer />}
            </HourItemContainer>
          ))}
        </ScrollContainer>
      </SectionContainer>
    </MainContainer>
  );
}
