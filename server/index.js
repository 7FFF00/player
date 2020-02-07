const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const db = require('../database/db.js');

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.listen(port, () => {
  console.log('Server listening on port', port);
});

app.get('/player_bundle', (req, res) => {
  fs.readFile(path.resolve(__dirname, '..', 'client', 'dist', 'player_bundle.js'), (err, data) => {
    console.log('Attempting to find and provide bundle.js');
    if (err) {
      console.log('ERROR RETRIEVING BUNDLE:', err);
      res.status(500).send('Failed to find')
    } else {
      console.log('BUNDLE RETRIEVED, SENDING');
      res.status(200).send(data);
    }
  });
});

app.get('/api/player/songs/:songId', (req, res) => db.readOne({ id: req.params.songId })
  .then((songData) => res.status(200).send(songData))
  .catch((err) => res.status(400).send(err)));
