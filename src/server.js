const express = require('express');
require("dotenv").config();
var cors = require('cors');
const routes = require('./routes');

require('./database/index.js')

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333)