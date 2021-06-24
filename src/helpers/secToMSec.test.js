import secToMSec from './secToMSec';

describe('secToMSec', () => {
  it('multiples 1000 times', () => {
    expect(secToMSec(12)).toBe(12000);
  });
});
