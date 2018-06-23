var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var db = mongojs('hospitalmanagement', ['doctors']);



/* GET home page. */
router.get('/', function(req, res, next) {
  db.doctors.find(function (err,docs) {
  //  console.log(docs);
      res.render('index', {
         title: 'Express'
        });
  })
});

router.get('/showdoctors', function(req, res) {
  db.doctors.find(function (err,docs) {
        res.render('showdoctors', {
          title: 'hospitalmanagement',
          doctors: docs,
        });
        // console.log(docs);
  });
});

router.get('/home',function (req,res,docs) {


})

router.post('/login',function (req,res) {

  var name = req.body.dname ;
  var pass = req.body.dpass ;

  db.doctors.find(function (err,docs) {

    for (var i = 0; i < docs.length ; i++) {
      if (name == docs.name && pass == docs.password) {
        res.render('/home');
      }
    }
     console.log("authentication success");
  })
  // console.log(name,pass);
  res.redirect('/');

})
router.post('/register',function (req,res) {

  var regname = req.body.regestername ;
  var regpass = req.body.regesterpass ;
  var status = req.body.status;
  var designation = req.body.designation;
  console.log(regname,regpass,status,designation);
  res.redirect('/');

})

module.exports = router;
