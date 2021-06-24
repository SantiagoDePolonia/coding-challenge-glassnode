import getHighchartsOptions from './getHighchartsOptions';

describe('getHighchartsOptions', () => {
  it('returns an object', () => {
    expect(typeof getHighchartsOptions('Test', [{}])).toBe("object");
  });

  it('Pass title to options', () => {
    const title = 'Test';
    expect(getHighchartsOptions(title, [{}]).title.text).toBe(title);
  });

  it('Pass series to options', () => {
    const series = 'Series';
    expect(getHighchartsOptions('title', series).series).toBe(series);
  });
});
