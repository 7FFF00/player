import styled from 'styled-components';

export const StyledDiv = styled.div`
  margin: 20px;
`;

export const StyledBox = styled.div`
  outline: 1px solid rgba(100, 100, 100, .4);
  outline-offset: -1px;
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
  visibility: ${(props) => props.fade ? 'visible' : 'hidden'};
  transition: background-color .3s ease-in-out;
  position: absolute;
  background-color: rgba(220,220,220,${(props) => props.show ? '0.7' : '0'});
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ModalBox = styled.div`
`;
