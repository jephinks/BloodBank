const path = require('path');
const mainController = require('../controllers/mainController');
const express = require('express');
//exporting from path.js
const rootDir = require('../util/path');

const router = express.Router();



//route 1- 
router.get('/adminhospital', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'adminhospitallist.html'));
  });
  //route 2
  // /admin/aboutus => POST
  router.post('/adminhospital', (req, res, next) => {
    console.log(req.body.title);
    res.redirect('/');
  });

// now import in app.js file
module.exports = router;