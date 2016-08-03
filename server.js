require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
var methodOverride = require('method-override');
var nodemailer = require('nodemailer');
var port = process.env.SERVER_HOST_PORT || 2000;

app.use(function (req, res, next){

  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_HOST_PORT); //allow client server access
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.header('Access-Control-Allow-Methods', 'POST');
  methodOverride('X-HTTP-Method-Override')
  bodyParser.urlencoded({ extended: true })
  next();

});


app.use(express.static(__dirname + '/dist'));


//create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(process.env.NODE_MAILER_SMTP);

app.post('/api/postEmail', bodyParser.json(), function (req, res) {

    console.log('------ Email POST request at ' + new Date() + '\n' + 'req.body: ')
    console.log('name: ' + req.body.name)
    console.log('email: ' + req.body.email)
    console.log('message: ' + req.body.message)

    var mailData = {
      from: req.body.name + ' ' + req.body.email,
      //to: 'fiona@fionaross.co.uk',
      to: 'tony@tonybarnes.me',
      subject: 'Fiona Ross web app enquiry',
      html: '<div style="background:#121212;color:#FFF;padding:2%;">Fiona Ross web app enquiry</div><br/>' + '<div style="padding:2%;"><p><b>From: </b><br/>'  + req.body.name + ' (' + req.body.email + ')</p></div>'  + '<br/><div style="padding:0 2%;"><b>Enquiry:</b></div>' + '<div style="padding:0 2%;">' + req.body.message + '</div>'
    };

    transporter.sendMail(mailData, function (err, info){
        if(err){
          return console.log('Error: ' + err);
          res.send(err)
        }
        res.json({ message: 'Email sent!'})
        console.log('Email sent! ' + info.response);
    });

});

require('./client.app.routes')(app); // pass our application into our routes

app.listen(port);
console.log('Server running on port ' + port);
