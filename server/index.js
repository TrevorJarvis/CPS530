const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Message = require('./models/messageModel');

const path = require('path');
const app = express();
const port = 3001;

const db = mongoose.connect('mongodb://cps530:cps530pass@ds051990.mlab.com:51990/cps530');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../client/public')));
app.get('/api/messages', (req, res, next) => {
	Message.find({})
		.sort('-date')
		.exec((err, messages) => {
			res.json(messages);
	});
});

app.post('/api/messages', (req, res, next) => {
	console.log(req.body);
	let now = (new Date()).toLocaleString();
	let message = new Message({ 
		content: req.body.content, 
		date: now,
		author: req.body.author,
		textColor: req.body.textColor,
		backgroundColor: req.body.backgroundColor
	});
	message.save();
	res.status(201).send(message);
});

app.delete('/api/messages/:messageId', (req, res, next) => {
	Message.findById(req.params.messageId, (err, message) => {
		message.remove(err => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.status(204).send('removed');
			}
		})
	});
});

app.listen(port, () => {
	console.log(`ExpressJS is running on port ${port}.`)
});
