import {useStringHandler} from '../../../src/locale/useStringHandler';
import strings from '../../../src/locale/strings.json';
import {renderGenericHook} from '../../utils';

describe('useStringHandler tests', () => {
  function renderUseStringHandler(prefix?: string) {
    return renderGenericHook(() => useStringHandler(prefix));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should fetch strings correctly', () => {
    const { result } = renderUseStringHandler();
    expect(result.current.text('forecast.title')).toBe(strings.forecast.title);
  });

  it('Should fetch strings with prefix correctly', () => {
    const { result } = renderUseStringHandler('forecast');
    expect(result.current.text('title')).toBe(strings.forecast.title);
  });

  it('Should fail to fetch string', () => {
    const { result } = renderUseStringHandler();
    const key = 'forecast.banana';
    expect(result.current.text(key)).toBe(`{ String not found for key: ${key} }`);
  });

  it('Should fetch string and replace params', () => {
    const { result } = renderUseStringHandler('forecast');
    const temp_c = '23';
    const str = strings.forecast.temperature.replace('{{ temp_c }}', temp_c);
    expect(result.current.text('temperature', { temp_c })).toBe(str);
  });

  it('Should fetch string with fallback', () => {
    const { result } = renderUseStringHandler();
    const key = 'forecast.banana';
    const fallbackKey = 'forecast.title';
    expect(result.current.text(key, undefined, fallbackKey)).toBe(strings.forecast.title);
  });
});
