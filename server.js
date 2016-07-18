var express = require('express'),
      app = express(),
      logger = require('morgan'),
      port = process.env.PORT || 5000;

// middleware
app.use(logger('dev'))
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.listen(port, function() {
  console.log('we on port ' + port)
})

