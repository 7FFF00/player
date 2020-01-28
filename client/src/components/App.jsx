import React from 'react';
import PlayButton from './PlayButton/PlayButton';
import TrackInfo from './TrackInfo/TrackInfo';
import AlbumArt from './AlbumArt/AlbumArt';
import PlayInfo from './PlayInfo/PlayInfo';
import Comments from './Comments/Comments';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: 'paused', // paused | play
      playTime: 0,
      track: {},
    };
  }

  componentDidMount() {
    this.update();
  }

  update() {
    // retrieve song information populating state
    // passing down state via props to children components
    // as needed
    fetch('/api/songs/0')
      .then((response) => response.json())
      .then((trackObject) => this.setState(() => ({
        track: trackObject,
      })));
  }

  render() {
    const { playState, playTime, track } = this.state;
    return (
      <div>
        App
        <PlayButton playState={playState} />
        <TrackInfo
          title={track.title}
          artist={track.artist}
          album={track.album}
          tags={track.tags}
          date={track.submittedDate}
        />
        <AlbumArt art={track.AlbumArt} />
        <PlayInfo waveform={track.waveform} playTime={playTime} duration={track.length} />
        <Comments comments={track.comments} />
      </div>
    );
  }
}

export default App;
