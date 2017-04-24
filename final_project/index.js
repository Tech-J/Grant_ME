const express = require('express');
const pgp = require('pg-promise');
const bdParser = require('body-parser');
const cors = require('cors');
const port = process.env.port || 8080;
const app = express();

app.use(cors());
app.use(express.static('./src/build'));
app.use(bdParser.urlencoded({ extended: false }));
app.use(bdParser.json());
app.use(require('./server/router'))

app.listen(port, ()=>{console.log(`listening ${port}`)})
