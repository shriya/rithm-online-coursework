var mongoose = require("mongoose")
var db = require('./')

var eaterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  favoriteTopping: String,
  tacos: [{
    ref: 'Taco',
    type: mongoose.Schema.Types.ObjectId
  }]
})

eaterSchema.pre('remove', function(next) {
    // find all the tacos that have an eater property which
    db.Taco.remove({eater: this._id}) 
    next()
})


var Eater = mongoose.model('Eater', eaterSchema)

module.exports = Eater
