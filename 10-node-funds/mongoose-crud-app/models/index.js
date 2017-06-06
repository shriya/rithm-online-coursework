var mongoose = require("mongoose")
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/tacqueria-ritmo')
mongoose.Promise = Promise // q or bluebird or ES2015 promises

module.exports.Eater = require("./eater")
module.exports.Taco = require("./taco")
