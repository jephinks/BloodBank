const path = require('path');

const express = require('express');
//exporting from path.js
const rootDir = require('../util/path');

const router = express.Router();
const mainController = require('../controllers/mainController');



//route 1- this route is for search for blood
router.get('/searchblood', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'searchforblood.html'));
  });
  //route 2
  // /searchblood => POST
  router.post('/searchblood', (req, res, next) => {
    console.log(req.body.title);
    res.redirect('/');
  });

  router.post('/getDonersUser', mainController.getdonersUser);

// now import in app.js file
module.exports = router;