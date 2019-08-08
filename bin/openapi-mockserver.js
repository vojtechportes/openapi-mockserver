#!/usr/bin/env node
'use strict';

const cli = require('cli')

proccess.stdout(proccess.cwd())

cli.exec('node node_modules/openapi-mockserver/dist/idnex.js', function() {
  process.stdout('Starting openapi-mockserver app')
});