import React from 'react';
import styled from 'styled-components';

const TrackInfo = (props) => (
  <div>
    TrackInfo
    {props.artist ? props.artist : ' ARTIST '}
    {props.title ? props.title : 'TITLE '}
    {props.album ? props.album : 'ALBUM '}
    {props.tags ? props.tags : 'TAGS '}
    {props.date ? props.date : 'DATE '}
  </div>
  );

export default TrackInfo;

// title, artist, album, tags, date
// Artist                               time-since-submission
// Track Name                            user-clickable-tags
// Album Name (if there is one)
//