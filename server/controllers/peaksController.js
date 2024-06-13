const Peak = require('../models/peaksModel.js');

const peaksController = {};

peaksController.getPeaks = (req, res, next) => {
  Peak.find({})
    .then((data) => {
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
