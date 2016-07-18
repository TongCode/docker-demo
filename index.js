'use strict';

const app = require('./app.js');
const services = require('./lib/services.js');

//Setup dependency injection
app.locals.services = services;

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
