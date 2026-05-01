const express = require('express');
const path = require('path');
const mainControllers = require('./controllers/mainControllers');
const mainRouters = require('./routes/mainRoutes');

const app = express();

// STATIC FILES
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// BODY PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// VIEW ENIGINE - SETTINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ROUTES
app.use('/AleksKaczmarczyk/CV', mainRouters);

app.use((err, req, res, next) => {
  console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
});

module.exports = app;
