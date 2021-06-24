import roundPrice from './roundPrice';

describe('roundPrice', () => {
  it('round to 2 decimal spaces', () => {
    expect(roundPrice(2.12345)).toBe(2.12);
  });
});
