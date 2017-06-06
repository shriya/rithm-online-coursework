var mongoose = require("mongoose")
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/taqueria-ritmo')
mongoose.Promise = Promise

module.exports.Eater = require("./eater")
