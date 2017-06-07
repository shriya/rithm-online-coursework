var mongoose = require("mongoose")

var tacoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  numToppings: Number,
  eater: {
    ref: 'Eater',
    type: mongoose.Schema.Types.ObjectId
  }
})

var Taco = mongoose.model('Taco', tacoSchema);

module.exports = Taco;
