var express = require('express');
// // var passport = require('passport');
// // var LocalStrategy = require('passport-local').Strategy;
var model = require('../models/User');
var router = express.Router();

// configure passport
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
// end configuration for passport

function buildErrorResponse(err) {
  return {
    message: err,
    status: 500,
    note: 'This response was generated due to a user error'
  };
};

router.get('/', function(req, res){
  // res.render('login', { user: req.user });
    model.find(function(err, users) {
      if (err) {
        res.json(buildErrorResponse(err));
      } else {
        res.json(users);
      }
    });
});

router.post('/', function(req, res) {
  res.render('register', { user: req.user });
});
// router.get('/login', function(req, res){
//   res.render('login', { user: req.user });
// });
//
// router.post('/login', passport.authenticate('local', { failureRedirect: '/user' }), function(req, res) {
//   res.redirect('/');
// });
//
// router.get('/register', function(req, res){
//   // res.render('register', { user: req.user });
// });
//
// router.post('/register', function(req, res){
//   User.register(new User({
//     username: req.body.username //from the form
//   }),
//   req.body.password,
//   function(err, account) {
//     if (err) {
//       return res.render('register', { account: account });
//     }
//     // passport.authenticate('local') is a function
//     passport.authenticate('local')(req, res, function() {
//       res.redirect('/');
//     });
//   });
//
// });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});



module.exports = router;
