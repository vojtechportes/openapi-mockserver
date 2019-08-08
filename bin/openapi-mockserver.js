#!/usr/bin/env node
'use strict';

const cli = require('cli')
const process = require('process')

console.log('CWD: ', process.cwd())
console.log(__dirname, __filename)

cli.exec('node node_modules/openapi-mockserver/dist/index.js', (lines) => {
  console.log(lines)
});