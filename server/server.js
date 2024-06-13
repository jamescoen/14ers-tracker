const express = require('express');
const path = require('path');
const peakRouter = require('');

const connectDB = require('./config/db.config.js');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/peaks', peakRouter);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve('src/index.html'));
});

//Error handler to catch unknown requests
app.use((req, res) => {
  res.status(404).send('Could not find the page you were looking for');
});

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught an unknown middleware error',
    status: 500,
    message: {
      err: 'An error occured`',
    },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});
// start server
app.listen(PORT, () => {
  console.log(`Server listening on port:  ${PORT}`);
});

module.exports = app;

//To Do's:

//Configure package.json to have npm start start up the server so that I can test.
//Once that's done use Postman to check if the database is linking correctly by making the proper get request

//Set up event listeners for the buttons on the cards to trigger fetch requests to the backend.
//Set up the front end to make fetch requests to the back end.
//Have the response update state.

//Figure out how to handle state - configure useState
//Populate the elements that will display on the Peak cards from state?

//Draw out a wireframe?
//Add some basic styling on the React Components.
