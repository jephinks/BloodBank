const path = require('path');

const express = require('express');
//exporting from path.js
const rootDir = require('../util/path');

const router = express.Router();
const { pool } = require('../config/dbconnection');

const mainController = require('../controllers/mainController');




  router.post('/updatehospital', async (req, res, next) => {

    let hid;
    if(req.session && req.session.user) {
    hid = req.session.user.id;
    }

    let logindata=await pool.query(`UPDATE  hospitalregistration SET hname=?,address=?,mailid=?,phone=?,usermobile=?,country=?,usercity=? WHERE hid=?`,[req.body.data.hname,req.body.data.address,req.body.data.mailid,req.body.data.phone,req.body.data.usermobile,req.body.data.country,req.body.data.usercity,hid]);


    
    
  });
  router.post('/getHospitalData', mainController.getHospitalData);

  router.get('/updatehospital', mainController.updateHospitaldata);
  
// now import in app.js file
module.exports = router;

