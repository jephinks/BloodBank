const path = require('path');

const express = require('express');
//exporting from path.js
const rootDir = require('../util/path');
const router = express.Router();
const { pool } = require('../config/dbconnection');


//route 1- this route is for contactus
router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
  });
  //route 2
  // /admin/contactus => POST
  router.post('/contactus', async (req, res, next) => {
    console.log("req.body", req.body);
    await pool.query("INSERT INTO contactus VALUES(null,'"+req.body.name +"','"+req.body.mail +"','"+req.body.phone +"','"+req.body.message +"')")
    res.redirect('/contactus');
  });

// now import in app.js file
module.exports = router;