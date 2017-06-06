var express = require("express");
var router = express.Router();
var id = 1;
var puppies = [];

router.get('/', function(req,res){
  res.render('index', {puppies})
})

router.get('/new', function(req,res){
  res.render('new')
})

router.get('/:id', function(req,res){
  // go to the puppies array and find a puppy by req.params.id
  let puppy = puppies.find(p => p.id === +req.params.id)
  res.render('show', {puppy})
})

router.get('/:id/edit', function(req,res){
  let puppy = puppies.find(p => p.id === +req.params.id)
  res.render('index', {puppy})
})

router.post('/', function(req,res){
  puppies.push(Object.assign({},req.body, {id}))
  id++
  res.redirect('/')
})

router.patch('/:id', function(req,res){
  let puppy = puppies.find(p => p.id === +req.params.id)
  puppy = Object.assign({}, puppy, req.body);
  res.redirect(`/puppies/${puppy.id}`)
})

router.delete('/:id', function(req,res){
  let puppyIdx = puppies.findIndex(p => p.id === +req.params.id)
  puppies.splice(puppyIdx, 1)
  res.redirect(`/puppies`)
})

module.exports = router;



