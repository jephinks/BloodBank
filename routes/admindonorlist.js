const path = require('path');
const express = require('express');
const mainController = require('../controllers/mainController');
const rootDir = require('../util/path');
const router = express.Router();


//route 1- 
router.get('/admindonor', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admindonorlist.html'));
  });




  router.get('/deletedonor',mainController.deletedonor)
  
router.post('/getDonorList', mainController.getListDonor);

// now import in app.js file
module.exports = router;