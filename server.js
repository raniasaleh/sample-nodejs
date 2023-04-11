// Requiring module
const express = require('express');

// Creating express object
const app = express();

// Handling GET request
app.get('/', (req, res) => {
	res.send('Hi there, have a good day, A simple Node App is '
		+ 'running on this server')
	res.end()
})

// Port Number
const PORT = process.env.PORT || 3001;

// Server Setup
app.listen(PORT,console.log(
`Server started on port ${PORT}`));
