import React from 'react';
import PropTypes from 'prop-types';
import TimeDisplay from './TimeDisplay';
import Waveform from './Waveform';
import Comments from './Comments';
import { RelativeDiv, OverlappingDiv, CommentsContainer } from './playInfoStyles';

const PlayInfo = ({
  waveform,
  playTime,
  duration,
  comments,
}) => (
  <RelativeDiv>
    <OverlappingDiv>
      <Waveform waveform={waveform} playTime={playTime} duration={duration} />
    </OverlappingDiv>
    <OverlappingDiv>
      <TimeDisplay playTime={playTime} duration={duration} />
    </OverlappingDiv>
    <CommentsContainer>
      <Comments comments={comments} duration={duration} />
    </CommentsContainer>
  </RelativeDiv>
);

PlayInfo.propTypes = {
  waveform: PropTypes.arrayOf(PropTypes.number),
  playTime: PropTypes.number,
  duration: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.objectOf(PropTypes.string),
    body: PropTypes.string,
    timestamp: PropTypes.string,
  })),
};

PlayInfo.defaultProps = {
  waveform: [],
  playTime: 0,
  duration: 0,
  comments: [],
};

export default PlayInfo;
