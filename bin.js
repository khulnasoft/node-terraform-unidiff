#!/usr/bin/env node
const unidiff = require('.')
const { readFileSync } = require('fs')

process.on('uncaughtException', errorHandler)

function errorHandler ({ message }) {
  console.error(message)
  process.exit(1)
}

const file = process.argv[2]

if (!file) {
  throw new Error('a terraform plan is required')
}

// attempt to load plan file
const plan = JSON.parse(readFileSync(file))

// process file
const { summary, patches } = unidiff(plan)

// display output
console.log(patches.join('\n\n'))

console.log(`Plan: ${summary.create} to add, ${summary.update} to change, ${summary.delete} to destroy`)
