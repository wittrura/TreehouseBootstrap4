var express = require('express');
var app = express();
// const PORT = 3000;

// app.use(express.static('public'));
//
// app.listen(PORT, function() {
//   console.log('Listening on port ' + PORT);
// });



app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response) {
  response.render('public/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
