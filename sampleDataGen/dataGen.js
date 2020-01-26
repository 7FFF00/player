const faker = require('faker');
const fs = require('fs');

// data output varibales
const trackCount = 100;
const commentMaxCount = 20;
const genreMaxCount = 3;
const trackDurationGapCeiling = 240;

const tracks = {};

// generation variables
const titleSuffixes = ['Sick', 'Bobo', 'Kidz Bop Edition', '(dubstep remix)', '(chill hop lofi remix)', 'ft. Pitbull'];
const genreOptions = ['lo-fi', 'rap', 'chillhop', 'dubstep', 'classical', 'rock/rap fusion', 'rock', 'hip hop',
  'pop', 'country', 'electronic', 'beep boop', 'noise', 'garbage'];

// titles faker.company.bsBuzz, bsNoun, bsAdjective, catchPhrase, bs, catchPhraseNoun
const randomNameProp = ['bsBuzz', 'bsNoun', 'bsAdjective', 'catchPhrase', 'bs', 'catchPhraseNoun'];

const randName = () => {
  const randChoice = Math.round(Math.random());
  if (randChoice === 0) {
    return faker.company[randomNameProp[Math.floor(Math.random() * randomNameProp.length)]]();
  }
  return faker.name.findName();
};

const randAppend = () => {
  const randChoice = Math.round(Math.random() * 5);
  if (randChoice < 2) {
    return ` ${titleSuffixes[Math.floor(Math.random() * titleSuffixes.length)]}`;
  }
  return '';
};

const genComment = (songLength) => {
  const comment = {};
  comment.user = {};
  comment.user.name = randName();
  comment.user.avatar = `https://loremflickr.com/320/240?fake=${Math.floor(Math.random() * 100)}`;
  comment.timestamp = Math.floor(Math.random() * songLength);
  const age = Math.floor(Math.random() * 12) + 4;
  const name = faker.name.findName();
  const buzz = faker.company.bsBuzz();
  const adj = faker.company.bsAdjective();

  const choice = Math.round(Math.random() * 10);
  if (choice < 2) {
    comment.body = `yo wutup ${buzz}s, it me ${name}, i'm ${age} years old and this song is gud no doubt no doubt but u shud chek out my ${adj} beats!!! i'm a struggling ${buzz} rapper pls gimme a listen ty <3<3<3 :fireEmoji: :fireEmoji:`;
  } else if (choice < 3) {
    comment.body = `${faker.hacker.phrase()}`;
  } else if (choice < 4) {
    comment.body = `${faker.hacker.phrase()}`;
  } else if (choice < 5) {
    comment.body = `${faker.company.catchPhrase()}`;
  } else if (choice < 6) {
    comment.body = `click my profile for hot singles in the ${faker.address.city()} area near u`;
  } else if (choice < 7) {
    comment.body = `la${Array(choice).join('a')}me`;
  } else if (choice < 8) {
    comment.body = 'eyy **** ******* *** **  what **** an** **** ha***** *** ****';
  } else {
    comment.body = faker.lorem.sentence();
  }

  return comment;
};

const genWave = (count = 100) => {
  const wave = []; // max wave is 100
  for (let i = 0; i < count; i += 1) {
    wave.push(Math.floor(Math.random() * 80) + 20);
  }

  // mild smoothing
  for (let i = 0; i < wave.length; i += 1) {
    const nextWave = wave[i + 1] !== undefined
      ? wave[i + 1]
      : 0;

    const currDelta = nextWave - wave[i];

    wave[i] = Math.floor(wave[i] + currDelta * 0.3);
  }

  return wave;
};

const genDuration = () => {
  const durationFloor = 40;
  const durationGap = Math.floor(Math.random() * trackDurationGapCeiling);
  return durationFloor + durationGap;
};

for (let i = 0; i < trackCount; i += 1) {
  const track = {};

  const randomCommentCount = Math.floor(Math.random() * commentMaxCount);
  const genreCount = Math.floor(Math.random() * genreMaxCount) + 1;

  track.id = i;
  track.album = randName() + randAppend();
  track.albumArt = `https://loremflickr.com/640/480/abstract?fake=${Math.floor(Math.random() * 100)}`;
  track.title = randName() + randAppend();
  track.artist = randName(); // aka artist
  track.length = genDuration(); // in seconds
  track.waveform = genWave(); // array of 100 wave size values
  track.genres = []; // aka tags
  track.comments = [];


  // populate comments
  for (let j = 0; j < randomCommentCount; j += 1) {
    track.comments.push(genComment(track.length));
  }

  // populate genre tags
  for (let k = 0; k < genreCount; k += 1) {
    const potentialGenres = genreOptions.slice();
    track.genres.push(potentialGenres
      .splice(Math.floor(Math.random() * potentialGenres.length), 1)[0]);
  }

  // populate waveform data

  tracks[i] = track;
}

const outputTrackData = JSON.stringify(tracks);

// writing to file:
fs.writeFile('database/sampleData.json', outputTrackData, (err) => {
  if (err) {
    console.log('Error');
  } else {
    console.log('Success');
  }
});
