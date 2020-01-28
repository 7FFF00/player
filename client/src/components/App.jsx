import React from 'react';
import PlayButton from './PlayButton';
import TrackInfo from './TrackInfo';
import AlbumArt from './AlbumArt';
import Waveform from './Waveform';
import Comments from './Comments';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: 'paused', // paused | play
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
    return (
      <div>
        App
        <PlayButton />
        <TrackInfo />
        <AlbumArt />
        <Waveform />
        <Comments />
      </div>
    );
  }
}

export default App;
