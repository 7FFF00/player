import React from 'react';
import PropTypes from 'prop-types';
import timeSince from './timeSince';
import {
  StyledDiv,
  StyledRightDiv,
  StyledArtist,
  StyledTitle,
  StyledPlaylist,
  StyledTags,
  StyledDate,
} from './trackInfoStyles';

const TrackInfo = ({
  title,
  artist,
  playlist,
  tags,
  date,
}) => (
  <StyledDiv>
    <div>
      <StyledArtist as="a" href="/">{artist}</StyledArtist>
      <StyledTitle>{title}</StyledTitle>
      {
        playlist.name.length > 0
          ? (
            <StyledPlaylist as="a" href="/">
              <span>
                In playlist:
                <span> </span>
                {playlist.name}
              </span>
            </StyledPlaylist>
          )
          : null
      }
    </div>
    <StyledRightDiv>
      <StyledDate>{timeSince(date)}</StyledDate>
      <StyledTags as="a" href="/">
        {tags.length > 0 ? (<span># </span>) : null}
        {
          tags.map((tag, index) => (tags.length > 1 && index !== tags.length - 1
            ? (
              <span key={`${tag}Key`}>
                {tag}
                /
              </span>
            )
            : (<span key={`${tag}Key`}>{tag}</span>)
          ))
        }
      </StyledTags>
    </StyledRightDiv>
  </StyledDiv>
);

TrackInfo.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playlist: PropTypes.objectOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string,
};

TrackInfo.defaultProps = {
  title: '',
  artist: '',
  playlist: {
    name: '',
    artUrl: '',
  },
  tags: [],
  date: new Date().toISOString(),
};

export default TrackInfo;
