//require express
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// require('dotenv/config');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const apikey = process.env.SENDGRID_API_KEY;

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});
// create for our router object
var router = express.Router();

//export our router
module.exports = router;


router.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/MYD', function (req, res) {
    res.sendFile(path.join(__dirname, '../myd2.html'));
});

router.get('/horario', function (req, res) {
    res.sendFile(path.join(__dirname, '../horario.html'));
});

router.post('/email', urlencodedParser, function (req, res) {
    //console.log(req.body.Email);
    // console.log(req.body.Message);
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(apikey);
    const msgName = "Send by " + req.body.Name + "\n\n" + "----------------------------------------------------" + "\n\n";
    //console.log(msgName);
    const msg = {
        to: 'geral@jest.pt',
        from: req.body.Email,
        subject: 'Mensagem de jest.pt',
        text: msgName.concat(req.body.Message),
    };
    // console.log(msg.text);
    sgMail.send(msg);
    //res.sendFile(path.join(__dirname, '../index.html'));
    //res.send('root');
    res.redirect('home');


});

//route for our homepage
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});
