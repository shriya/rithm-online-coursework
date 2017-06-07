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
      eater.save().then(function(){
        res.redirect(`/eaters/${eater.id}/tacos`)
      })
    })
  }, function(err){
    next(err)
  })
})

router.get('/:taco_id', function(req, res, next) {
  db.Taco.findById(req.params.taco_id).then(function(taco) {
    res.render('tacos/show', {taco})
  })
}, function(err) {
  next(err)
})

router.get('/:taco_id/edit', function(req, res, next) {
  db.Taco.findById(req.params.taco_id).then(function(taco) {
    res.render('tacos/edit', {taco})
  })
}, function(err) {
  next(err)
})

router.patch('/:taco_id', function(req, res, next) {
  db.Taco.findByIdAndUpdate(req.params.taco_id, req.body.taco).then(function(taco) {
    res.redirect(`/eaters/${taco.eater}/tacos`)
  })
}, function(err) {
  next(err)
})

router.delete('/:taco_id', function(req, res, next) {
  db.Taco.findByIdAndRemove(req.params.taco_id).then(function(taco) {
    db.Eater.findById(taco.eater).then(function(eater) {
      eater.tacos.remove(taco.id)
      eater.save().then(function() {
        res.redirect(`/eaters/${taco.eater}/tacos`)
      })
    })
  })
}, function(err) {
  next(err)
})

module.exports = router;













