const path = require('path');

const express = require('express');
//exporting from path.js
const rootDir = require('../util/path');

const router = express.Router();


router.get('/', async (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
  });

router.get('/index', function(req, res, next){
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
  });
  //route 2
  // index => POST
  router.post('/index', (req, res, next) => {
    
    res.redirect('/');
  });

// now import in app.js file
module.exports = router;