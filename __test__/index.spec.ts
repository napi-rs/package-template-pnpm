import test from 'ava'

import { plus100, plus100Async } from '../index.js'

test('sync function from native code', async (t) => {
  const fixture = 42
  t.is(plus100(fixture), fixture + 100)
  t.is(await plus100Async(fixture), fixture + 100)
})
