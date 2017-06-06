var mongoose = require("mongoose")

// need a schema
var eaterSchema = new mongoose.Schema({
    name: String, 
    favoriteTopping: String
})

// need a model
var Eater = mongoose.model('Eater', eaterSchema)

// export the model
module.exports = Eater

