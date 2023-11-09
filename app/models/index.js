const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.testModel = require('./testModel')

db.mongoose = mongoose;
module.exports = db;