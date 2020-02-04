import React from 'react';
import PropTypes from 'prop-types';
import { CommentContainer, CommentThumbnail, CommentBody } from './playInfoStyles';

const Comments = ({ comments, duration }) => (
  <CommentContainer>
    {
      comments.map(({ user, body, timestamp }) => (
        <CommentThumbnail avatarUrl={user.avatarUrl} timestamp={timestamp} duration={duration} />
      ))
    }
  </CommentContainer>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.objectOf(PropTypes.string),
    body: PropTypes.string,
    timestamp: PropTypes.string,
  })),
  duration: PropTypes.number,
};

Comments.defaultProps = {
  comments: [],
  duration: 0,
};

export default Comments;
