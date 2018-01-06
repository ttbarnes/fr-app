require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
var methodOverride = require('method-override');
var nodemailer = require('nodemailer');
var morgan = require('morgan');
var sm = require('sitemap');
var fs = require('fs');
var port = process.env.PORT || process.env.SERVER_HOST_PORT || 2000;


app.use(function (req, res, next){

  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_HOST_PORT); //allow client server access
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST');
  methodOverride('X-HTTP-Method-Override');
  bodyParser.urlencoded({ extended: true });
  next();

});

app.use(require('prerender-node').set('prerenderToken', 'fuhSFmvU5BVO6LHp2RHR'));
app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000/').set('prerenderToken', 'fuhSFmvU5BVO6LHp2RHR'));
app.use(express.static(__dirname + '/dist'));

app.use(morgan('dev'));

//create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(process.env.NODE_MAILER_SMTP);

app.post('/api/postEmail', bodyParser.json(), function (req, res) {

    console.log('------ Email POST request at ' + new Date() + '\n' + 'req.body: ')
    console.log('name: ' + req.body.name)
    console.log('email: ' + req.body.email)
    console.log('message: ' + req.body.message)

    var mailData = {
      from: req.body.name + ' ' + req.body.email,
      to: 'fiona@fionaross.co.uk',
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

// create sitemap
var sitemap = sm.createSitemap({
  hostname: 'http://www.fionaross.co.uk',
  urls: [
    { url: '/' },
    { url: '/music'},
    { url: '/music/album/1'},
    { url: '/music/album/2'},
    { url: '/music/album/3' },
    { url: '/press' },
    { url: '/gigs' },
    { url: '/news'},
    { url: '/videos'},
    { url: '/about' },
    { url: '/gallery'},
    { url: '/collaborators'},
    { url: '/collaborators/1'},
    { url: '/collaborators/2'},
    { url: '/collaborators/3'},
    { url: '/collaborators/4'},
    { url: '/collaborators/5'},
    { url: '/collaborators/6'},
    { url: '/collaborators/7'},
    { url: '/collaborators/8'},
    { url: '/collaborators/9'},
    { url: '/collaborators/10'},
    { url: '/collaborators/11'},
    { url: '/collaborators/12'},
    { url: '/collaborators/13'},
    { url: '/collaborators/14'},
    { url: '/articles'},
    { url: '/tech'},
    { url: '/contact'}
  ]
});
sitemap.toXML( (err, xml) => {
  if (err) { console.log('error creating sitemap.'); }
});
fs.writeFileSync('dist/sitemap.xml', sitemap.toString());

app.listen(port);
console.log('Server running on port ' + port);
