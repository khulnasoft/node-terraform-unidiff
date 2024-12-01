// packages
const { test } = require('tap')

// module
const parse = require('..')

const fixture = {
  format_version: 'xxx',
  terraform_version: 'yyy',
  resource_changes: [
    {
      address: 'module.foo.create',
      change: {
        actions: ['create'],
        after: { foo: 'bar' }
      }
    },
    {
      address: 'module.foo.read',
      change: {
        actions: ['read']
      }
    },
    {
      address: 'module.foo.noop',
      change: {
        actions: ['no-op'],
        before: { foo: 'bar' },
        after: { foo: 'bar' }
      }
    },
    {
      address: 'module.foo.update',
      change: {
        actions: ['update'],
        before: { foo: 'bar' },
        after: { foo: 'baz' }
      }
    },
    {
      address: 'module.foo.delete-create',
      change: {
        actions: ['delete', 'create'],
        before: { foo: 'baz' },
        after: { foo: 'bar' }
      }
    },
    {
      address: 'module.foo.create-delete',
      change: {
        actions: ['create', 'delete'],
        before: { foo: 'bar' }
      }
    },
    {
      address: 'module.foo.delete',
      change: {
        actions: ['delete'],
        before: { foo: 'bar' }
      }
    }
  ]
}

test('plan -> has changes', assert => {
  assert.plan(2)

  const { summary, patches } = parse(fixture)

  assert.equal(patches.length, 6)
  assert.same(summary, { create: 3, update: 1, delete: 3 })
})
