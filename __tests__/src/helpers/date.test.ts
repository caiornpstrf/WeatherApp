import { formatDate, formatTime } from '../../../src/helpers/date';

describe('date tests', () => {
  const date = new Date('2024-11-29T00:00:00Z');

  beforeAll(() => {
    const offset = date.getTimezoneOffset();
    date.setTime(date.getTime() + offset * 60 * 1000);
  });

  it('should format date', () => {
    const formattedDate = '11/29/2024';

    const result = formatDate(date.toISOString());
    expect(result).toBe(formattedDate);
  });

  it('should format time', () => {
    const formattedTime = '12:00 AM';

    const result = formatTime(date.toISOString());
    expect(result).toBe(formattedTime);
  });
});
