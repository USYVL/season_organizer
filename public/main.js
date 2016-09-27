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
			title: 'Practice',
			start: '2016-09-13T17:30:00',
			end: '2016-09-13T18:30:00',
			allday: false,
			color: 'blue'
			},
			{
			title: 'Practice',
			start: '2016-09-20T17:30:00',
			end: '2016-09-20T18:30:00',
			allday: false,
			color: 'blue'
			},
			{
			title: 'Practice',
			start: '2016-09-27T17:30:00',
			end: '2016-09-27T18:30:00',
			allday: false,
			color: 'blue'
			},
			{
			title: 'Practice',
			start: '2016-10-04T17:30:00',
			end: '2016-10-04T18:30:00',
			allday: false,
			color: 'blue'
			},
			{
			title: 'Practice',
			start: '2016-10-11T17:30:00',
			end: '2016-10-11T18:30:00',
			allday: false,
			color: 'blue'
			},
			{
			title: 'Practice',
			start: '2016-10-18T17:30:00',
			end: '2016-10-18T18:30:00',
			allday: false,
			color: 'blue'
			},
			{
			title: 'Practice',
			start: '2016-10-25T17:30:00',
			end: '2016-10-25T18:30:00',
			allday: false,
			color: 'blue'
			},
			{
			title: 'Practice',
			start: '2016-11-01T17:30:00',
			end: '2016-10-01T18:30:00',
			allday: false,
			color: 'blue'
			},
			{
			title: 'First Practice',
			start: '2016-09-17T10:00:00',
			end: '2016-09-17T11:00:00',
			allday: false,
			color: 'red'
			},
			{
			title: 'Practice',
			start: '2016-09-24T10:00:00',
			end: '2016-09-24T11:00:00',
			allday: false,
			color: 'red'
			},
			{
			title: 'Game Day',
			start: '2016-10-01T10:00:00',
			end: '2016-10-01T11:00:00',
			allday: false,
			color: 'red'
			},
			{
			title: 'Tournament at Arroyo Verde Park',
			start: '2016-10-08T10:00:00',
			end: '2016-10-08T12:00:00',
			allday: false,
			color: 'red'
			},
			{
			title: 'Game Day',
			start: '2016-10-15T10:00:00',
			end: '2016-10-15T11:00:00',
			allday: false,
			color: 'red'
			},
			{
			title: 'Hosting Tournament',
			start: '2016-10-22T10:00:00',
			end: '2016-10-22T12:00:00',
			allday: false,
			color: 'red'
			},
			{
			title: 'Tournament at Arroyo Verde Park',
			start: '2016-10-29T10:00:00',
			end: '2016-10-29T12:00:00',
			allday: false,
			color: 'red'
			},
			{
			title: 'Final Game Day',
			start: '2016-11-05T10:00:00',
			end: '2016-10-05T12:00:00',
			allday: false,
			color: 'red'
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

$('td').dbclick(function) {
	$.ajax({
		url: '/house/' + $(this).text(),
		type: 'DELETE'
	});
});

/*var teamDelete = document.getElementById('teamDelete');

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




