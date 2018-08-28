const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/template/:value', function (req, res) {
  res.render('builder');
});

//app.get('/templatesView/:value', function (req, res) {
//  res.render('template'+ req.params.value +'.ejs');
//});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
