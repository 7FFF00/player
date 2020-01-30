import React from 'react';
import { ModalBackdrop, ModalBox } from './albumStyles';

const AlbumModal = ({ display, toggleModal, renderModal }) => (
  <div onClick={() => toggleModal()}>
    <ModalBackdrop show={display} fade={renderModal}/>
  </div>
);

export default AlbumModal;
