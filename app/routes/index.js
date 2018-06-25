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
         console.log(docs);
  });
});



router.get('/home',function (req,res,docs) {

  res.send('Hello from HOMEPAGE');

})

router.post('/login',function (req,res) {

  var name = req.body.dname ;
  var pass = req.body.dpass ;

  db.doctors.find(function (err,docs) {

    for (var i = 0; i < docs.length ; i++) {
      if (name == docs[i].name && pass == docs[i].password) {
        res.render('home');
        console.log("authentication success");
      }else {
        console.log("wrong password");
      }
    }

  })

  res.redirect('/');

})

router.post('/register',function (req,res) {

  // req.checkBody('registername', 'name is required').notEmpty();
  // req.checkBody('registerpassword', 'password is required').notEmpty();
  // req.checkBody('designation', 'designation is required').notEmpty();

  //var errors = req.validationErrors();

  // if (error) {
  //   res.render('index', {
  //     title: 'customers',
  //     doctors: docs,
  //     errors: errors,
  //   });}else {

  var newdoctor = {
    name: req.body.rname,
    password: req.body.rpass,
    status:req.body.status,
    designation: req.body.designation,
  }
  console.log(req.body.rname,req.body.rpass);
  db.doctors.insert(newdoctor, function(err, result) {
    if (err) {} else {
      res.redirect('/');
    }
  });
//}
  //console.log(newdoctor);
})

router.get('/bookappointment',function (req,res) {
  res.render('appointment')
});

router.post('/bookappointment',function (req,res) {
    var pname = req.body.pname
    var consultd = req.body.consult
    var pdisease = req.body.disease
    var papptime = req.body.apptime

    console.log(req,res);

    console.log(pname,consultd,pdisease,papptime);

    db.doctors.update({designation:consultd}, {$push:{patients:{patientname:pname,consult:consultd,disease:pdisease,apptime:papptime}}},function () {

      console.log("appointment booked")
    });

})



module.exports = router;
