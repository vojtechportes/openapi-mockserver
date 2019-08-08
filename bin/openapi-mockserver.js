#!/usr/bin/env node
'use strict';

const cli = require('cli')

cli.exec('node dist/index.js', function() {
  process.stdout('Starting openapi-mockserver app')
});