import styled from 'styled-components';

const rngColor = () => {
  let colorArray = ['', '', ''];
  colorArray = colorArray.map(() => Math.floor(Math.random() * 255));
  return `rgb(${colorArray[0]},${colorArray[1]},${colorArray[2]})`;
};

export const RelativeDiv = styled.div`
  position: relative;
  width: 95%;
  margin: 0px 0px 0px 15px;
  height: 180px;
`;

export const OverlappingDiv = styled.div`
  position: absolute;
  width: 100%;
`;

export const CommentsContainer = styled.div`
  position: absolute;
  bottom: 40%;
  background: 
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

export const SplitContainer = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  justify-content: space-between;
  align-items: center;
`;

export const CurrentPlayTime = styled.div`
  font-family: Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-size: 10px;
  background-color: #202020;
  color: #FF5500;
`;

export const Duration = styled.div`
  font-family: Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-size: 10px;
  background-color: #202020;
  color: #C9C9C9;
`;

export const CommentContainer = styled.div`
  position: relative;
  color: blue;
  width: 100%;
`;

export const CommentThumbnail = styled.div`
  position: absolute;
  left: ${(props) => (props.timestamp / (props.duration > 0 ? props.duration : 1)) * 600}px;
  background-image: linear-gradient(${rngColor()},${rngColor()},${rngColor()});
  width: 20px;
  height: 20px;
`;

export const CommentBody = styled.div`
`;
