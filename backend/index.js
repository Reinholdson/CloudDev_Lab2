var express = require('express');
var app = express();

const serverPort = process.env.PORT || 5000;

app.get('/add', function (req, res) {
	console.log("Calculate two numbers");
	console.log("First number: " + req.query.numberOne)
	console.log("Second number: " + req.query.numberTwo)
	
	const numberOne  = parseInt(req.query.numberOne);
	const numberTwo = parseInt(req.query.numberTwo);	

	const resultAdd = numberOne + numberTwo;

	res.send("The two added numbers resulted in " +(resultAdd.toString()));
			
})
app.get('/sub', function (req, res) {
	console.log("Substitute two numbers");
	console.log("First number: " + req.query.numberOne)
	console.log("Second number: " + req.query.numberTwo)
	
	const numberOne  = parseInt(req.query.numberOne);
	const numberTwo = parseInt(req.query.numberTwo);	

	const resultSub = numberOne - numberTwo;

	res.send("The two substituted numbers resulted in " +(resultSub.toString()));
			
})

app.get('/multi', function (req, res) {
	console.log("Multiplicate two numbers");
	console.log("First number: " + req.query.numberOne)
	console.log("Second number: " + req.query.numberTwo)
	
	const numberOne  = parseInt(req.query.numberOne);
	const numberTwo = parseInt(req.query.numberTwo);	

	const resultMulti = numberOne * numberTwo;

	res.send("The two multiplicated numbers resulted in " +(resultMulti.toString()));
			
})
app.get('/div', function (req, res) {
	console.log("Divide two numbers");
	console.log("First number: " + req.query.numberOne)
	console.log("Second number: " + req.query.numberTwo)
	
	const numberOne  = parseInt(req.query.numberOne);
	const numberTwo = parseInt(req.query.numberTwo);	

	const resultDiv = numberOne / numberTwo;

	res.send("The two divided numbers resulted in " +(resultDiv.toString()));
			
})

app.listen(serverPort, () => {
	console.log("Server listening on port: " + serverPort);
})
