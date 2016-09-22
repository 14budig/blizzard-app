var express = require('express');
var request = require('request');
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

app.use('/vendor', express.static(__dirname + '/bower_components'));


app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

var key = 'sfdugjby7k6cfxvpuyr5b6mkmvghwmr4';

app.get('/api/ladder', function(req, res){
  var url = 'https://us.api.battle.net/sc2/ladder/197921?locale=en_US&apikey=sfdugjby7k6cfxvpuyr5b6mkmvghwmr4';
  request(url, function(err, response, body){
    res.send(body);
  });
});

app.get('/api/players/:id/:region/:name', function(req, res){
  console.log('player GET');
  var url = 'https://us.api.battle.net/sc2/profile/'+req.params.id+'/'
            +req.params.region+'/'+req.params.name +'/?locale=en_US&apikey=sfdugjby7k6cfxvpuyr5b6mkmvghwmr4';
            console.log(url);
  request(url,function(err, response, body){
    res.send(body);
  });
});

app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});


//https://us.api.battle.net/sc2/ladder/197921?locale=en_US&apikey=sfdugjby7k6cfxvpuyr5b6mkmvghwmr4
