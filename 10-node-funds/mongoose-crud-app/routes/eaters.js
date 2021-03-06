var express = require("express")
var router = express.Router()
var db = require('../models') // by default index.js is searched for

router.get('/', function(req,res,next){
  db.Eater.find().then(function(eaters){
    res.render('eaters/index', {eaters});
  }, function(err){
    next(err)
  })
})

router.get('/new', function(req,res,next){
  res.render('eaters/new');
})

router.get('/:id', function(req,res,next){
  db.Eater.findById(req.params.id).then(function(eater){
    res.render('eaters/show', {eater});
  }, function(err){
    next(err)
  })
})

router.get('/:id/edit', function(req,res,next){
  db.Eater.findById(req.params.id).then(function(eater){
    res.render('eaters/edit', {eater});
  }, function(err){
    next(err)
  })
})

router.post('/', function(req,res,next){
  db.Eater.create(req.body.eater).then(function(){
    res.redirect('/eaters')
  }, function(err){
    next(err)
  })
})

router.patch('/:id', function(req,res,next){
  db.Eater.findByIdAndUpdate(req.params.id, req.body.eater).then(function(){
    res.redirect('/eaters')
  }, function(err){
    next(err)
  })
})

// router.delete('/:id', function(req,res,next){
//   db.Eater.findByIdAndRemove(req.params.id).then(function(eater){
//     eval(require("locus"))
//     eater.tacos.forEach(function(cur){
//       db.Tacos.findByIdAndRemove(cur)
//     })
//     res.redirect('/eaters')
//   }, function(err){
//     next(err)
//   })
// })

// router.delete('/:id', function(req,res,next){
//   db.Eater.findByIdAndRemove(req.params.id).then(function(eater){
//     // eval(require("locus"))
//     var promiseArr = eater.tacos.map(function(cur){
//       new Promise(function(resolve, reject){ 
//         db.Tacos.findByIdAndRemove(cur)
//       });
//       return resolve;
//     });
//     locus
//     Promise.all(promiseArr).then(function(){
//       res.redirect('/eaters')
//     })
//   }, function(err){
//     next(err)
//   })
// })

router.delete('/:id', function(req,res,next){
  db.Eater.findByIdAndRemove(req.params.id).then(function(eater){
    eater.tacos.remove({}).then(function() {
      res.redirect('/eaters')
    })
  }, function(err){
    next(err)
  })
})

module.exports = router;







