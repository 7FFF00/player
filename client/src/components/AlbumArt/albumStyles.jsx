import styled from 'styled-components';

export const StyledBox = styled.div`
  width: 340px;
  height: 340px;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  display: block;
  transition: background-color .3s ease-in-out;
  position: absolute;
  background-color: rgba(220, 220, 220, ${(props) => props.show ? '.7' : '0'});
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.fade ? '100%' : '0'};
`;

export const ModalBox = styled.div`
`;
