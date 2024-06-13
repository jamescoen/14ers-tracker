const Peaks = require('../models/peaksModel.js');

const peaksController = {};

peaksController.getPeaks = (req, res, next) => {
  Peaks.find({})
    .then((data) => {
      //   console.log(data);
      res.locals.peaks = data;
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error in peaksController.getPeaks: ${err}`,
        message: { err: 'Error in peaksController' },
      });
    });
};

module.exports = peaksController;
