$(document).ready(function() {
	$('#calendar').fullCalendar({
		theme: true,
		editable: true,
		header: {
			right: 'today, prev, next',
			left: 'title'
			},
		events: [
			{
			title: 'First Practice',
			start: '2016-09-13T17:30:00',
			end: '2016-09-13T18:30:00',
			allday: false
			},
		]
	})
});

var edit = document.getElementById('edit');

var editcoach = document.getElementById('editcoach');
var editteamName = document.getElementById('editteamName');
var editshirtColor = document.getElementById('editshirtColor');
		

var update = document.getElementById('update');

update.addEventListener('click', function() {
	fetch('house', {
		method: 'put',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			//'team' : 'Team2',
			//'coach': 'Janet',
			//'teamName': 'The Janets',
			///'shirtColor' : 'Red'
			'team': edit,
			'coach': editcoach,
			'teamName': editteamName,
			'shirtColor' : editshirtColor
		})
	})
	.then(res => {
		if (res.ok) return res.json()
	})
	.then(data => {
		console.log(data)
		window.location.reload(true)
	});
});

var teamDelete = document.getElementById('teamDelete');

var del = document.getElementById('delete');

del.addEventListener('click', function() {
	fetch('house', {
		method: 'delete',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			'team': 'Team2'
		})
	})
	.then(res => {
		if (res.ok) return res.json()
	})
	.then(data => {
		console.log(data)
		window.location.reload(true)
	});
});



/*update.addEventListener('click', function() {
	$.ajax ({
		url: 'house'
		method: 'PUT'
		
	.then(res => {
		if (res.ok) return res.json()
	})
	.then(data => {
		console.log(data)
		window.location.reload(true)
	});
});

var teamDelete = document.getElementById('teamDelete');

var del = document.getElementById('delete');

del.addEventListener('click', function() {
	fetch('house', {
		method: 'delete',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			'team': 'Team2'
		})
	})
	.then(res => {
		if (res.ok) return res.json()
	})
	.then(data => {
		console.log(data)
		window.location.reload(true)
	});
});*/

