const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use('/', express.static(path.join(__dirname, 'client/public')));

app.listen(port, () => {
	console.log(`ExpressJS is running on port ${port}.`)
});
