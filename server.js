console.log('Hey there');
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.use(bodyParser.json());

/*app.get('/', (req, res) => {
		res.sendFile('/Users/aja/usyvlteams/index.html')
});*/

var db
MongoClient.connect('mongodb://aja_b:hooB52B@ds013926.mlab.com:13926/usyvl-roster', (err, database) => {
	if (err) return console.log(err);
	db = database;
	app.listen(3000, () => {
	console.log('listening on 3000')
	});
});

app.post('/house', (req, res) => {
	db.collection('house').save(req.body, (err, result) => {
		if (err) return console.log(err);
		console.log('saved house keeping to database');
		res.redirect('/')
		});
	});


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	db.collection('house').find().toArray((err, result) => {
		if (err) return console.log(err);
		res.render('index.ejs', {house: result});
		});
});

app.use(express.static('public'));

app.put('/house', (req, res) => {
	db.collection('house').findOneAndUpdate(
		/*{team: 'Team2'},*/
		{team: edit},
		{$set: {
			team: req.body.team,
			coach: req.body.coach,
			teamName: req.body.teamName,
			shirtColor: req.body.shirtColor
			}	
		},
		(err, result) => {
			if (err) return res.send(err)
			res.send(result)
		});
});

app.delete('/house', (req, res) => {
	db.collection('house').findOneAndDelete(
		{team: req.body.team},
		(err, result) => {
			if (err) return res.send(500, err)
			res.send('A team was deleted.')
		});
});

app.post('/rides', (req, res) => {
	db.collection('rides').save(req.body, (err, result) => {
		if (err) return console.log(err);
		console.log('saved rides to database');
		res.redirect('/')
		});
	});

app.get('/', (req, res) => {
	db.collection('rides').find().toArray((err, result) => {
		if (err) return console.log(err);
		res.render('index.ejs', {rides: result});
		});
});
