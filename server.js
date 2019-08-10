require('dotenv').config();
var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var sm = require('sitemap');
var fs = require('fs');
var app = express();
var port = process.env.PORT || process.env.SERVER_HOST_PORT || 2000;

app.use(express.static(__dirname + '/dist'));

app.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_HOST_PORT);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  methodOverride('X-HTTP-Method-Override');
  next();
});

app.use(require('prerender-node').set('prerenderToken', 'fuhSFmvU5BVO6LHp2RHR'));
app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000/').set('prerenderToken', 'fuhSFmvU5BVO6LHp2RHR'));

require('./client.app.routes')(app); // pass application into routes

// create sitemap
var sitemap = sm.createSitemap({
  hostname: 'http://www.fionaross.co.uk',
  urls: [
    { url: '/' },
    { url: '/music' },
    { url: '/music/album/1' },
    { url: '/music/album/2' },
    { url: '/music/album/3' },
    { url: '/press' },
    { url: '/gigs' },
    { url: '/news' },
    { url: '/videos' },
    { url: '/about' },
    { url: '/gallery' },
    { url: '/collaborators' },
    { url: '/collaborators/Gibbi-Bettini' },
    { url: '/collaborators/Derek-Daley' },
    { url: '/collaborators/Marley-Drummond' },
    { url: '/collaborators/Ashaine-White' },
    { url: '/collaborators/Adam-Hayes' },
    { url: '/collaborators/Nick-Watson' },
    { url: '/collaborators/Tony-Barnes' },
    { url: '/collaborators/Alexander-Barnes-Ross' },
    { url: '/collaborators/Catarina-Andrade' },
    { url: '/collaborators/The-Goat' },
    { url: '/collaborators/David-Apps' },
    { url: '/collaborators/Nathan-Williams' },
    { url: '/collaborators/Roger-Batting' },
    { url: '/collaborators/Paul-Mearing' },
    { url: '/collaborators/Rose-Redrup' },
    { url: '/collaborators/Stefan-Ferrol' },
    { url: '/collaborators/Kris-Buzow' },
    { url: '/collaborators/Jon-Hockley' },
    { url: '/collaborators/Iain-Court' },
    { url: '/journalism' },
    { url: '/contact '},
    { url: '/reflections-in-blue-by-audrey-ross' }
  ]
});
sitemap.toXML( (err, xml) => {
  if (err) { console.log('error creating sitemap.'); }
});
fs.writeFileSync('dist/sitemap.xml', sitemap.toString());

app.listen(port);
console.log('Server running on port ' + port);
