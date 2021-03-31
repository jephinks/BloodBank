const path = require('path');

const express = require('express');
//exporting from path.js
const rootDir = require('../util/path');
const { PRIORITY_LOW } = require('constants');

const router = express.Router();
const { pool } = require('../config/dbconnection');


router.get('/registration', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'registration1.html'));
  });
  //route 2
  // index => POST
  router.post('/registration', async (req, res, next) => {

    let logindata=await pool.query("INSERT INTO login VALUES(null,'d','"+req.body.mailid +"','"+req.body.password +"')");
    
    let insertId = logindata.insertId;
    
    
    await pool.query("INSERT INTO userregistration VALUES("+insertId+",'"+req.body.fname +"','"+req.body.lname +"','"+req.body.mailid +"','"+req.body.usermobile +"','"+req.body.usermobile2 +"','"+req.body.city +"','"+req.body.countries +"','"+req.body.group +"','"+req.body.birthday +"','"+req.body.lastdate +"','"+req.body.password +"')");
    

    res.redirect('/login');
  });

// now import in app.js file
module.exports = router;