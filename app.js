// npm init
// npm install express
//npm install body-parser

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var session = require('express-session');

require('ejs');





const app = express();

app.use(cookieParser());
app.use(session({secret: "thod"}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const aboutusRoutes = require('./routes/aboutus.js');
const indexRoutes = require('./routes/index.js');
const registrationRoutes = require('./routes/registration1.js');
const contactusRoutes = require('./routes/contactus.js');
const bloodsearchRoutes = require('./routes/searchforblood.js');
const testimonialsRoutes = require('./routes/testimonials.js');
const loginRoutes = require('./routes/login.js');
const hospitalregistrationRoutes = require('./routes/hospitalregistration.js');
const EventsRoutes = require('./routes/events.js');
const updateuserRoutes = require('./routes/updateuser.js');
const admindonorRoutes = require('./routes/admindonorlist.js');
const adminhospitalRoutes = require('./routes/adminhospitallist.js');
const admincontactusRoutes = require('./routes/admincontactus.js');
const updatehospitalRoutes = require('./routes/updatehospital.js');
const { nextTick } = require('process');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// here we call router object we made in admin.js file ,we added the admin path here


app.use(aboutusRoutes);
app.use(indexRoutes);
app.use(registrationRoutes);
app.use(contactusRoutes);
app.use(bloodsearchRoutes);
app.use(testimonialsRoutes);
app.use(loginRoutes);
app.use(hospitalregistrationRoutes);
app.use(EventsRoutes);
app.use(updateuserRoutes);
app.use(admindonorRoutes);
app.use(adminhospitalRoutes);
app.use(admincontactusRoutes);
app.use(updatehospitalRoutes);





// module.exports = connection;

app.listen(3000);
