const express = require('express');
const path = require('path');
const db = require('../database/db.js');

const app = express();
const port = 3002;

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.listen(port, () => {
  console.log('Server listening on port', port);
});

app.get('/api/songs/:songId', (req, res) => db.readOne({ id: req.params.songId })
  .then((songData) => res.status(200).send(songData))
  .catch((err) => res.status(400).send(err)));
