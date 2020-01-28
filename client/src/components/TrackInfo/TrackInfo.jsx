import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBox = styled.div`
  border: solid 1px black;
`;

const TrackInfo = (props) => {
  const {
    title,
    artist,
    album,
    tags,
    date,
  } = props;

  return (
    <StyledBox>
      TrackInfo
      {artist}
      {title}
      {album}
      {tags}
      {date}
    </StyledBox>
  );
};

TrackInfo.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
};

export default TrackInfo;

// title, artist, album, tags, date
// Artist                               time-since-submission
// Track Name                            user-clickable-tags
// Album Name (if there is one)
//