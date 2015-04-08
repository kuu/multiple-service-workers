'use strict';

var path = require('path'),
    express = require('express');

var app = express(),
    port = process.env.PORT || 8080,
    DOCS_DIR = path.join(__dirname, 'www');

app.use(express.static(DOCS_DIR));

app.get('/foo', function (req, res) {
  res.send('<a href="/">Go back from /foo to /</a>');
});

app.get('/bar', function (req, res) {
  res.send('<a href="/">Go back from /bar to /</a>');
});

// Start server
if (require.main === module) {
  console.log('Server listening on port %s', port);
  app.listen(port);
}

module.exports = app;
