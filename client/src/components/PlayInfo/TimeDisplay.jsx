import React from 'react';
import PropTypes from 'prop-types';
import timeFormat from './timeFormat';
import { SplitContainer, CurrentPlayTime, Duration } from './playInfoStyles';

const TimeDisplay = ({ playTime, duration }) => (
  <SplitContainer>
    <CurrentPlayTime>{playTime > 0 ? timeFormat(playTime) : null}</CurrentPlayTime>
    <Duration>{timeFormat(duration)}</Duration>
  </SplitContainer>
);

TimeDisplay.propTypes = {
  playTime: PropTypes.number,
  duration: PropTypes.number,
};

TimeDisplay.defaultProps = {
  playTime: 0,
  duration: 0,
};

export default TimeDisplay;
