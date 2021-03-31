const path = require('path');


const express = require('express');
//exporting from path.js
const rootDir = require('../util/path');
var mysql =require(`mysql`);
const bodyParser = require('body-parser');


const router = express.Router();
const { pool } = require('../config/dbconnection');
const { Session } = require('inspector');


router.get('/login', function(req, res, next) {
    res.sendFile(path.join(rootDir, 'views', 'login.html'));
  });
  //route 2
  // index => POST
  router.post('/login', async function(req, res, next){
    var mailid=req.body.mailid;
    var password=req.body.password;
  

    var DBidCheck = `SELECT id,type FROM login  WHERE mailid = ? and password= ?`;
    let resVal = await pool.query(DBidCheck,[mailid,password]);
    if(resVal) {
    
      var type= resVal[0].type;
      var id= resVal[0].id;
      req.session.user={"id":id}
      
      if (type=="a"){
        res.redirect('/admindonor');
      }
      else if(type=="d"){
        res.redirect("/updateuser")
      }
      else if(type=="h"){
        res.redirect("/updatehospital")
      }


    }

  });

// now import in app.js file
module.exports = router;