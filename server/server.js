const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());


const listener = app.listen(PORT, () =>{
	console.log(`Server listening on port ${PORT}`);
});