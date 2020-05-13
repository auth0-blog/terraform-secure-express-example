// routes/users.js

var express = require('express');
var secured = require('../lib/middleware/secured');
var jwtDecode = require('jwt-decode');
var router = express.Router();

/* GET user profile. */
router.get('/user', secured(), function (req, res, next) {
  let accessToken = req.user.accessToken;
  let permissions = [];
  console.log(accessToken);
  try {
    accessToken = jwtDecode(req.user.accessToken);
    permissions = accessToken.permissions;
  } catch (e) {
    console.log(e);
  }

  res.render('user', {
    title: 'Profile page',
    permissions
  });
});

module.exports = router;