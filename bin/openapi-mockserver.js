#!/usr/bin/env node
'use strict';

const cli = require('cli')

console.log(process.cwd())

cli.exec('node node_modules/openapi-mockserver/dist/idnex.js', function() {
  process.stdout('Starting openapi-mockserver app')
});