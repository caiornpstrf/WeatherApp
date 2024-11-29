import { ForecastError } from '../../../src/service/getForecast/types';
import { getForecast } from '../../../src/service/getForecast';
import { Request } from '../../../src/service/Request';
import { mockErrorResponse, mockResponse } from '../../__mocks__/getForecast.mock';

jest.mock('../../../src/service/Request');
describe('getForecast tests', () => {
  const requestSpy = jest.spyOn(Request.prototype, 'send');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should return forecast', async () => {
    requestSpy.mockResolvedValue(mockResponse);

    const [error, response] = await getForecast({ location: 'São Paulo' });

    expect(error).toBeUndefined();
    expect(response).toBe(mockResponse);
  });

  it('Should fail when fetch returns undefined', async () => {
    requestSpy.mockResolvedValue(undefined);

    const [error, response] = await getForecast({ location: 'São Paulo' });

    expect(error).toBe(ForecastError.InternalApplicationError);
    expect(response).toBeUndefined();
  });

  it('Should fail due to network error', async () => {
    requestSpy.mockRejectedValue(new Error('Network error'));

    const [error, response] = await getForecast({ location: 'São Paulo' });

    expect(error).toBe(ForecastError.InternalApplicationError);
    expect(response).toBeUndefined();
  });

  it('Should fail due to API error', async () => {
    requestSpy.mockResolvedValue(mockErrorResponse);

    const [error, response] = await getForecast({ location: 'São Paulo' });

    expect(error).toBe(ForecastError.NoLocationFound);
    expect(response).toBeUndefined();
  });
});
