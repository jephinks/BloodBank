const path = require('path');

const express = require('express');
//exporting from path.js
const rootDir = require('../util/path');

const router = express.Router();



//route 1- 
router.get('/events', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'Events.html'));
  });
  //route 2
  //  => POST
  router.post('/events', (req, res, next) => {
    console.log(req.body.title);
    res.redirect('/');
  });

// now import in app.js file
module.exports = router;