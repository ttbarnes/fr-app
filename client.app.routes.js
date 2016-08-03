module.exports = function(app) {

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
  });

};