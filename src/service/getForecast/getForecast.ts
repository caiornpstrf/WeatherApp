import { Request } from '../Request';
import {
  ForecastError,
  ForecastPayload,
  ForecastResponse,
  ForecastResult,
} from './types';

function getParams(payload: ForecastPayload) {
  return {
    q: payload.location,
    days: '1',
    aqi: 'no',
    alerts: 'no',
  };
}

export async function getForecast(
  payload: ForecastPayload,
): Promise<ForecastResult> {
  try {
    const response = await new Request<ForecastResponse>(
      '/forecast.json',
      getParams(payload),
    ).send();

    if (!response) {
      return [ForecastError.InternalApplicationError, undefined];
    }

    if (response.error) {
      return [response.error.code, undefined];
    }

    return [undefined, response];
  } catch {
    // The API returns error in the response, so we can't reach this point
    // Anything that goes wrong here is an internal application error
    // Or a network error
    return [ForecastError.InternalApplicationError, undefined];
  }
}
