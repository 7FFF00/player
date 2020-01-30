import React from 'react';
import PropTypes from 'prop-types';
import AlbumModal from './AlbumModal';
import { StyledDiv, StyledBox, StyledImage } from './albumStyles';

class AlbumArt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      renderModal: false,
    };
  }

  toggleModal() {
    const { displayModal } = this.state;
    if (!displayModal) {
      // redisplay THEN fade in
      this.setState(() => ({ renderModal: true }),
        () => this.setState(() => ({ displayModal: true })));
    } else {
      // fade out THEN hide display
      this.setState(() => ({ displayModal: false }),
        () => setTimeout(() => this.setState(() => ({ renderModal: false })), 300));
    }
  }

  render() {
    const { album: { artUrl, text }, title } = this.props;
    const { displayModal, renderModal } = this.state;
    return (
      <StyledDiv>
        <StyledBox onClick={() => this.toggleModal()}>
          <StyledImage src={artUrl} alt={text} />
        </StyledBox>
        <AlbumModal
          artUrl={artUrl}
          artText={text}
          display={displayModal}
          title={title}
          renderModal={renderModal}
          toggleModal={() => this.toggleModal()}
        />
      </StyledDiv>
    );
  }
}

AlbumArt.propTypes = {
  album: PropTypes.objectOf(String),
  title: PropTypes.string,
};

AlbumArt.defaultProps = {
  album: {
    artUrl: '',
    text: '',
  },
  title: '',
};

export default AlbumArt;
