const mongoose = require('mongoose');

const { Schema } = mongoose;
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/songLibrary');

db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', () => {
  console.log('Connected to database');
});

const trackSchema = new Schema({
  id: Number,
  title: String,
  artist: String,
  album: String,
  albumArt: String,
  submittedDate: String,
  length: Number,
  waveform: [Number],
  tags: [String],
  comments: [{
    user: {
      name: String,
      avatarUrl: String,
    },
    body: String,
    timestamp: String,
  }],
});

const Track = mongoose.model('Track', trackSchema);

const readOne = (options = { id: 0 }) => new Promise((resolve, reject) => {
  Track.find(options, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data[0]);
    }
  });
});

module.exports = {
  readOne,
};
