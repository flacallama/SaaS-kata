import { getCatfish } from './getCatfish';

// I'm just getting started on some unit testing.
// looks like Im out of time
describe('getCatfish null', () => {
  it('should return the initial state', () => {
    expect(
      reducerEx({

      }, {})
    ).toEqual({ })
  })
})
