require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
var methodOverride = require('method-override');
var morgan = require('morgan');
var sm = require('sitemap');
var fs = require('fs');
var port = process.env.PORT || process.env.SERVER_HOST_PORT || 2000;


app.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_HOST_PORT); //allow client server access
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  methodOverride('X-HTTP-Method-Override');
  bodyParser.urlencoded({ extended: true });
  next();

});

app.use(require('prerender-node').set('prerenderToken', 'fuhSFmvU5BVO6LHp2RHR'));
app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000/').set('prerenderToken', 'fuhSFmvU5BVO6LHp2RHR'));
app.use(express.static(__dirname + '/dist'));

app.use(morgan('dev'));

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
    { url: '/other-work'},
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
