import React from 'react';
import PlayButton from './PlayButton/PlayButton';
import TrackInfo from './TrackInfo/TrackInfo';
import AlbumArt from './AlbumArt/AlbumArt';
import PlayInfo from './PlayInfo/PlayInfo';
import { StyledDiv, VerticalDiv, HorizontalDiv } from './appStyles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
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
    fetch('/api/songs/1')
      .then((response) => response.json())
      .then((trackObject) => this.setState(() => ({
        track: trackObject,
      })));
  }

  togglePlay() {
    console.log('Toggling Play to:', this.state.playing);
    this.setState((state) => ({ playing: !state.playing }));
  }

  render() {
    const { playing, playTime, track } = this.state;
    return (
      <StyledDiv>
        <VerticalDiv>
          <HorizontalDiv>
            <PlayButton playing={playing} togglePlay={() => this.togglePlay()}/>
            <TrackInfo
              title={track.title}
              artist={track.artist}
              playlist={track.playlist}
              tags={track.tags}
              date={track.submittedDate}
            />
          </HorizontalDiv>
          <PlayInfo
            waveform={track.waveform}
            playTime={playTime}
            duration={track.length}
            comments={track.comments}
          />
        </VerticalDiv>
        <AlbumArt album={track.album} trackTitle={track.title} />
      </StyledDiv>
    );
  }
}

export default App;
