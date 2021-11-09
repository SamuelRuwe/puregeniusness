const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/apps/puregeniusness-website'));

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/dist/apps/puregeniusness-website/index.html'));
});

app.listen(process.env.PORT || 8000);
