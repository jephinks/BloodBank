const path = require('path');

const express = require('express');
//exporting from path.js
const rootDir = require('../util/path');

const router = express.Router();
const { pool } = require('../config/dbconnection');

const mainController = require('../controllers/mainController');


// router.get('/updateuser', (req, res, next) => {
//     res.sendFile(path.join(rootDir, 'views', 'updateUser.html'));
//   });

  //route 2
  // index => POST

  router.post('/updateuser', async (req, res, next) => {

    let userId;
    if(req.session && req.session.user) {
    userId = req.session.user.id;
    }

    let logindata=await pool.query(`update  userregistration SET fname=?,lname=?,mailid=?,usermobile=?,usermobile2=?,usercity=?,countries=?,birthday=?,lastdate=? WHERE userid=?`,[req.body.data.fname,req.body.data.lname,req.body.data.mailid,req.body.data.mobile,req.body.data.mobileTwo,req.body.data.city,req.body.data.countries,req.body.data.birthday,req.body.data.donationDate,userId]);
    
  
  });
  router.post('/getUserData', mainController.getUserData);

  router.get('/updateuser', mainController.updateUserMain);
  
// now import in app.js file
module.exports = router;

