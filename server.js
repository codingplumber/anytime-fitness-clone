const express = require('express'),
  config = require('./config.js'),
  bodyParser = require('body-parser');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})
