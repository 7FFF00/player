import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import timeSince from './timeSince';

const {
  StyledDiv,
  RightDiv,
  StyledArtist,
  StyledTitle,
  StyledPlaylist,
  StyledTags,
  StyledDate,
} = styles;

const TrackInfo = (props) => {
  const {
    title,
    artist,
    playlist,
    tags,
    date,
  } = props;

  return (
    <StyledDiv>
      <div>
        <StyledArtist as="a" href="/">{artist}</StyledArtist>
        <StyledTitle>{title}</StyledTitle>
        <StyledPlaylist as="a" href="/">
          {
            playlist.length > 0
              ? (
                <span>
                  In playlist:
                  <span> </span>
                  {playlist}
                </span>
              )
              : null
          }
        </StyledPlaylist>
      </div>
      <RightDiv>
        <StyledDate>{timeSince(date)}</StyledDate>
        <StyledTags as="a" href="/">
          {tags.length > 0 ? (<span># </span>) : null}
          {
            tags.map((tag, index) => (tags.length > 1 && index !== tags.length - 1
              ? (
                <span>
                  {tag}
                  /
                </span>
              )
              : (<span>{tag}</span>)
            ))
          }
        </StyledTags>
      </RightDiv>
    </StyledDiv>
  );
};

TrackInfo.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  playlist: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
};

export default TrackInfo;