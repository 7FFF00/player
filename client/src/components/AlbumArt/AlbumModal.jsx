import React from 'react';
import PropTypes from 'prop-types';
import { ModalBackdrop } from './albumStyles';

const AlbumModal = ({
  // artUrl,
  // artText,
  display,
  toggleModal,
  renderModal,
}) => (
  <div>
    <ModalBackdrop show={display} fade={renderModal} onClick={() => toggleModal()} />
  </div>
);

AlbumModal.propTypes = {
  // artUrl: PropTypes.string,
  // artText: PropTypes.string,
  display: PropTypes.bool,
  toggleModal: PropTypes.func,
  renderModal: PropTypes.bool,
};

AlbumModal.defaultProps = {
  // artUrl: '',
  // artText: '',
  display: false,
  toggleModal: () => {},
  renderModal: false,
};

export default AlbumModal;
