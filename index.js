const express = require('express');
const app = express();
const path = require('path');
const runner = require(__dirname + '/app/process');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/template/:value', function (req, res) {
    res.render('builder', {templateModel: req.params.value, templateRouter: `partials/${req.params.value}.ejs` });
});

app.post('/process', function (req, res) {
    runner.createObject(req.query)
    .then(result => {
        res.send(200, 'ok');
    })
    .catch(err => {
        res.send(500, err);
    })
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
