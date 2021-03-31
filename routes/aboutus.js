const path = require('path');

const express = require('express');
//exporting from path.js
const rootDir = require('../util/path');


const router = express.Router();

//route 1- this route is reached under admin aboutus
router.get('/aboutus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'aboutus.html'));
});


// now import in app.js file
module.exports = router;