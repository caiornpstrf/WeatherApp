import { Result } from '../Request';

export type ForecastPayload = {
  location: string;
};

export type Condition = {
  text: string;
  icon: string;
  code: number;
};

export type Hour = {
  time: string;
  temp_c: number;
  condition: Condition;
};

export enum ForecastError {
  ApiKeyNotProvided = 1002,
  ParameterQNotProvided = 1003,
  ApiRequestUrlIsInvalid = 1005,
  NoLocationFound = 1006,
  ApiKeyProvidedIsInvalid = 2006,
  ApiKeyHasExceededCallsPerMonthQuota = 2007,
  ApiKeyHasBeenDisabled = 2008,
  ApiKeyDoesNotHaveAccessToTheResource = 2009,
  BodyPassedInBulkIsInvalid = 9000,
  BodyContainsTooManyLocations = 9001,
  InternalApplicationError = 9999,
}

/**
 * Simplified response from the API
 * only typing the fields that are used in the application
 * ref: https://www.weatherapi.com/docs/#apis-forecast
 */
export type ForecastResponse = {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: Condition;
  };
  forecast: {
    forecastday: {
      hour: Hour[];
    }[];
  };
  error?: {
    code: ForecastError;
    message: string;
  };
};

export type ForecastResult = Result<ForecastError, ForecastResponse>;
