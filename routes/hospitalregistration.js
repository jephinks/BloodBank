const path = require('path');

const express = require('express');
//exporting from path.js
const rootDir = require('../util/path');

const router = express.Router();
const { pool } = require('../config/dbconnection');

const mainController = require('../controllers/mainController');



router.get('/hospitalregistration', async (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'HospitalRegistration.html'));
  });
  //route 2
  // index => POST
  router.post('/hospitalregistration', async (req, res, next) => {
    let logindata=await pool.query("INSERT INTO login VALUES(null,'h','"+req.body.mailid +"','"+req.body.password +"')");
    
    let insertId = logindata.insertId;
    
    await pool.query("INSERT INTO hospitalregistration VALUES('"+insertId +"','"+req.body.hname +"','"+req.body.address +"','"+req.body.mailid +"','"+req.body.phone +"','"+req.body.usermobile +"','"+req.body.countries +"','"+req.body.usercity +"','"+req.body.password +"')")
    
   
    res.redirect('/login');

  });

  router.post('/getHospitallist',mainController.getListhospital)

 
// now import in app.js file
module.exports = router;