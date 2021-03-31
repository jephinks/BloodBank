const { request } = require('http');
const { pool } = require('../config/dbconnection');


//donor list
module.exports.getListDonor = async (req,res) => {
    try {
        let result = await pool.query(`SELECT * FROM userregistration`);
        
        // res.status(200).send(result);
        res.status(200).json({"data":result});

    } catch(err) {
        console.log("Error occurred while getting user details : ", err);
        res.status(500).json({ Message: "Error Occurred while getting user details" });

    };
};

//Hospital list
module.exports.getListhospital = async (req,res) => {
    try {
        let result = await pool.query(`SELECT * FROM hospitalregistration`);
        
        // res.status(200).send(result);
        res.status(200).json({"data":result});

    } catch(err) {
        console.log("Error occurred while getting user details : ", err);
        res.status(500).json({ Message: "Error Occurred while getting user details" });

    };
};


//edit User
module.exports.getUserData = async (req,res) => {
    try {
        if(req.body && req.body.userId ) {
            let userid = req.body.userId;
            let result = await pool.query(`SELECT *, DATE_FORMAT(birthday, "%Y-%m-%d") as birth,DATE_FORMAT(lastdate, "%Y-%m-%d") as blooddate FROM userregistration WHERE userid = ? `, [userid]);
            res.status(200).json({"data":result[0]});
        } else {
            res.status(200).json({Message: "Please provide userId"});
        }
        
        

    } catch(err) {
        console.log("Error: ", err);
        res.status(500).json({ Message: "Error Occurred while getting user details" });

    };
};



//search blood
module.exports.getdonersUser = async (req,res) => {
let val=req.body;

    try {
        if(req.body ) {
            

            let result = await pool.query(`SELECT *, DATE_FORMAT(birthday, "%Y-%m-%d") as birth,DATE_FORMAT(lastdate, "%Y-%m-%d") as blooddate FROM userregistration where (countries = ? or usercity = ?) and bloodgroup = ? `, [val.country, val.city, val.blood]);
           
            res.status(200).json({"data":result});
            
        } else {
            res.status(200).json({Message: "Please provide userId"});
        }
        
        

    } catch(err) {
        console.log("Error: ", err);
        res.status(500).json({ Message: "Error Occurred while getting user details" });

    };
};

//Update user
module.exports.updateUserMain = async (req,res) => {
    try {
        var name = 'hello';
        console.log("ggs",req.session);
        let userId;
            if(req.session && req.session.user) {
            userId = req.session.user.id;
            }
        res.render('updateUser.ejs', { user: userId });
        
    } catch(err) {
        console.log("Error: ", err);
        res.status(500).json({ Message: "Error Occurred while getting user details" });

    };
};

//contact Us list
module.exports.getListContactus = async (req,res) => {
    try {
        let result = await pool.query(`SELECT * FROM contactus`);

        res.status(200).json({"data":result});

    } catch(err) {
        console.log("Error occurred while getting user details : ", err);
        res.status(500).json({ Message: "Error Occurred while getting user details" });

    };
};


//update hospital

module.exports.getHospitalData = async (req,res) => {
    try {
        if(req.body && req.body.hid ) {
            let hid = req.body.hid;
            let result = await pool.query(`SELECT * FROM hospitalregistration WHERE hid=?`, [hid]);
            res.status(200).json({"data":result[0]});
            
        } else {
            res.status(200).json({Message: "Please provide userId"});

        }
        
        

    } catch(err) {
        console.log("Error: ", err);
        res.status(500).json({ Message: "Error Occurred while getting user details" });

    };
};


module.exports.updateHospitaldata = async (req,res) => {
    try {
        var name = 'hello';
        console.log("ggs",req.session);
        let hid;
            if(req.session && req.session.user) {
            hid = req.session.user.id;
            }
        res.render('updatehospital.ejs', { user: hid });
        console.log(res.data);
        
    } catch(err) {
        console.log("Error: ", err);
        res.status(500).json({ Message: "Error Occurred while getting user details" });

    };
    
};

//donor list
module.exports.deletedonor = async (req,res) => {
    try {

        
        let hid = req.body.testtest.val;
        console.log(hid);
        let result = await pool.query(`delete from userregistration where userid=?`,[hid]);
        
        // res.status(200).send(result);
        res.status(200).json({"data":result});

    } catch(err) {
        console.log("Error occurred while getting user details : ", err);
        res.status(500).json({ Message: "Error Occurred while getting user details" });

    };
};