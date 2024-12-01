// packages
const { test } = require('tap')

// module
const parse = require('..')

test('plan -> invalid plan', assert => {
  assert.plan(1)

  assert.throws(() => parse({}))
})
