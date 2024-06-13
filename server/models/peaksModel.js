const mongoose = require('mongoose');

const Peaks = mongoose.model('Peak', {}, 'peaks');

module.exports = Peaks;
