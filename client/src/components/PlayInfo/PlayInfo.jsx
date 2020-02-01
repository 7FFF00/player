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
      <Waveform waveform={waveform} />
    </OverlappingDiv>
    <OverlappingDiv>
      <TimeDisplay playTime={playTime} duration={duration} />
    </OverlappingDiv>
    <CommentsContainer>
      <Comments comments={comments} />
    </CommentsContainer>
  </RelativeDiv>
);

PlayInfo.propTypes = {
  waveform: PropTypes.arrayOf(PropTypes.number),
  playTime: PropTypes.number,
  duration: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

PlayInfo.defaultProps = {
  waveform: [],
  playTime: 0,
  duration: 0,
  comments: [],
};

export default PlayInfo;
