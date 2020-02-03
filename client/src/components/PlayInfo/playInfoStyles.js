import styled from 'styled-components';

export const RelativeDiv = styled.div`
  position: relative;
  width: 95%;
  margin: 0px 0px 0px 15px;
  height: 180px;
  border: solid black 1px;
`;

export const OverlappingDiv = styled.div`
  position: absolute;
  width: 100%;
`;

export const CommentsContainer = styled.div`
  position: absolute;
  bottom: 40%;
`;

export const StyledDiv = styled.div`
  width: 100%;
`;

export const StyledCanvas = styled.canvas`
  width: 100%;
  height: 140px;
  transition: opacity 0.2s ease;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
`;
