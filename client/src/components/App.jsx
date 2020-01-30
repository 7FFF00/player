import React from 'react';
import styled from 'styled-components';
import PlayButton from './PlayButton/PlayButton';
import TrackInfo from './TrackInfo/TrackInfo';
import AlbumArt from './AlbumArt/AlbumArt';
import PlayInfo from './PlayInfo/PlayInfo';

const StyledDiv = styled.div`
  background-color: #A0A0C0;
  font-family: Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-size: 16px;
`;

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
    fetch('/api/songs/1')
      .then((response) => response.json())
      .then((trackObject) => this.setState(() => ({
        track: trackObject,
      })));
  }

  render() {
    const { playState, playTime, track } = this.state;
    return (
      <StyledDiv>
        App
        <PlayButton playState={playState} />
        <TrackInfo
          title={track.title}
          artist={track.artist}
          playlist={track.playlist}
          tags={track.tags}
          date={track.submittedDate}
        />
        <AlbumArt artUrl={track.AlbumArt} title={track.title} />
        <PlayInfo
          waveform={track.waveform}
          playTime={playTime}
          duration={track.length}
          comments={track.comments}
        />
      </StyledDiv>
    );
  }
}

export default App;
