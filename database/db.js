const mongoose = require('mongoose');
const exampleData = require('./sampleData.json');

const { Schema } = mongoose;
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/tracks');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected!');
});

const trackSchema = new Schema({
  id: Number,
  title: String,
  artist: String,
  album: String,
  albumArt: String,
  length: Number,
  waveform: [Number],
  genres: [String],
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

const init = () => {
  const data = Object.values(exampleData);
  console.log(data[0]);
  console.log(data.length);

  for (let i = 0; i < data.length; i += 1) {
    new Track(data[i]).save();
  }
};

module.exports = {
  init,
};
