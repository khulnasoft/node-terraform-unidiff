// packages
const { test } = require('tap')

// module
const parse = require('..')

const fixture = {
  format_version: 'xxx',
  terraform_version: 'yyy'
}

test('plan -> has changes', assert => {
  assert.plan(3)

  const { summary, patches } = parse(fixture)

  assert.equal(patches.length, 0)
  assert.same(patches, [])
  assert.same(summary, { create: 0, update: 0, delete: 0 })
})
