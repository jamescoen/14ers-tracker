const express = require('express');
const peakRouter = express.Router();
const peaksController = require('../controllers/peaksController');

//Add routes here

peakRouter.get('/', peaksController.getPeaks, (req, res) => {
  res.status(200).json(res.locals.peaks);
});

module.exports = peakRouter;
