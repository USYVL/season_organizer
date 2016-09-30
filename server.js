console.log('Hey there');
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

//teaching the server to read JSON which is the form in which we send the data using the fetch api
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
		console.log('saved teams to database');
		res.redirect('/')
		});
});


app.set('view engine', 'ejs');

//allows the js to be loaded in index.ejs 
app.set("/js", express.static(__dirname + "/js"));

app.get('/', (req, res) => {
	db.collection('house').find().toArray((err, result) => {
		if (err) return console.log(err);
		res.render('index.ejs', {house: result});
		});
});

app.use(express.static('public'));

//allows the css to be loaded in index.ejs 
app.set("/css", express.static(__dirname + "/css"));


app.put('/house', (req, res) => {
	db.collection('house').findOneAndUpdate(
		{team: 'Team3'},
		/*{team: edit},*/
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
			res.redirect('/')
		});
});


/*app.post('/ride', (req, res) => {
	db.ride.save(req.body, (err, result) => {
		if (err) return console.log(err);
		console.log('saved rides to database');
		res.redirect('/')
		});
});

app.get('/', (req, res) => {
	db.ride.find().toArray((err, result) => {
		if (err) return console.log(err);
		res.render('index.ejs', {ride: result});
		});
});

app.post('/ride', (req, res) => {
	db.collection('ride').save(req.body, (err, result) => {
		if (err) return console.log(err);
		console.log('saved rides to database');
		res.redirect('/')
		});
});

app.get('/', (req, res) => {
	db.collection('ride').find().toArray((err, result) => {
		if (err) return console.log(err);
		res.render('index.ejs', {ride: result});
		});
});*/
