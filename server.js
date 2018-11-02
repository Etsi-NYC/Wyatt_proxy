const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, './public')));

app.get('/*', ((res, req) => req.sendFile(path.join(__dirname, './public/index.html'))));

var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server now listening on port ${port}`));