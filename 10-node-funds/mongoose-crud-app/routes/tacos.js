var express = require('express');
var router = express.Router({mergeParams: true});
var db = require("../models");

router.get('/', function(req,res,next){
  db.Eater.findById(req.params.eater_id).populate('tacos').then(function(eater){
    res.render('tacos/index', {eater})
  }, function(err){
    next(err)
  })
})

router.get('/new', function(req,res,next){
  db.Eater.findById(req.params.eater_id).then(function(eater){
    res.render('tacos/new', {eater})
  }, function(err){
    next(err)
  })
})

router.post('/', function(req,res,next){
  var newTaco = Object.assign({}, req.body.taco, {eater: req.params.eater_id})
  db.Taco.create(newTaco).then(function(taco){
    db.Eater.findById(req.params.eater_id).then(function(eater){
      eater.tacos.push(taco.id)
      eater.save().then(function(eater){
        res.redirect(`/eaters/${eater.id}/tacos`)
      })
    })
  }, function(err){
    next(err)
  })
})



module.exports = router;