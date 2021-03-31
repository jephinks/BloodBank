const path = require('path');
const express = require('express');
const mainController = require('../controllers/mainController');
const rootDir = require('../util/path');
const router = express.Router();


//route 1- 
router.get('/admincontactus', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admincontactus.html'));
  });

  
router.post('/admincontactus', mainController.getListContactus);

// now import in app.js file
module.exports = router;