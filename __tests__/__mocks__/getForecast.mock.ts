import { ForecastResponse, Hour } from '../../src/service';

const generateHours = (): Hour[] => {
  return new Array(24).fill(null).map((_, index) => ({
    condition: {
      code: 1000,
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      text: 'Sunny',
    },
    temp_c: 20,
    time: `2024-11-29 ${String(index).padStart(2, '0')}:00`,
  }));
};

export const mockResponse: ForecastResponse = {
  current: {
    condition: {
      code: 1000,
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      text: 'Sunny',
    },
    temp_c: 20,
  },
  location: {
    country: 'Brazil',
    name: 'São Paulo',
    region: 'São Paulo',
  },
  forecast: {
    forecastday: [
      {
        hour: generateHours(),
      },
    ],
  },
};

export const mockErrorResponse = {
  error: {
    code: 1006,
    message: 'No matching location found.',
  },
};
