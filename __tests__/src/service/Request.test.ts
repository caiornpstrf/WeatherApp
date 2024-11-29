import { Request } from '../../../src/service/Request';

const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
  json: jest.fn().mockResolvedValue({ test: 100 }),
  text: jest.fn().mockResolvedValue(JSON.stringify({ test: 100 })),
} as any);

jest.mock('react-native-config', () => ({
  API_URL: 'http://localhost:3000',
  API_KEY: 'test',
}));

describe('Request tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should send request with defaults', async () => {
    const request = new Request('/test');
    const response = await request.send();

    expect(response).toEqual({ test: 100 });
  });

  it('Should send request with urlParams', async () => {
    const request = new Request('/test', { test: 100 });
    const response = await request.send();

    expect(response).toEqual({ test: 100 });
    expect(fetchSpy).toHaveBeenCalledWith(
      'http://localhost:3000/test?test=100&key=test',
      {
        method: 'GET',
        headers: {},
      },
    );
  });

  it('Should send request and return undefined', async () => {
    fetchSpy.mockResolvedValueOnce({
      json: undefined,
      text: undefined,
    } as any);

    const request = new Request('/test');
    const response = await request.send();

    expect(response).toBeUndefined();
  });
});
