const path = require('path');

const express = require('express');
//exporting from path.js
const rootDir = require('../util/path');

const router = express.Router();




router.get('/testimonials', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'testimonials.html'));
  });
  //route 2
  // index => POST
  router.post('/testimonials', (req, res, next) => {
    console.log(req.body.title);
    res.redirect('/');
  });

// now import in app.js file
module.exports = router;