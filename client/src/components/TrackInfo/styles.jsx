import styled from 'styled-components';

export const StyledDiv = styled.div`
  font-family: Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`;

export const StyledRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledArtist = styled.div`
  width: max-content;
  margin: 3px;
  padding: 3px 8px 3px 8px;
  background-color: #202020;
  color: #C5C5C5;
  text-decoration: none;

  :hover {
    color: #F9F9F9;
    cursor: pointer;
  }
`;

export const StyledTitle = styled.div`
  width: max-content;
  margin: 6px 3px 6px 3px;
  padding: 8px;
  background-color: #202020;
  color: #F9F9F9;
  font-size: 24px;
`;

export const StyledPlaylist = styled.div`
  width: max-content;
  margin: 3px;
  padding: 3px 8px 3px 8px;
  background-color: #202020;
  color: #C5C5C5;
  text-decoration: none;

  :hover {
    color: #F9F9F9;
    cursor: pointer;
  }
`;

export const StyledTags = styled.div`
  width: max-content;
  padding: 2px 8px 2px 8px;
  background-color: #909095;
  color: #F9F9F9;
  border-radius: 30px;
  text-decoration: none;
  position: relative;
  top: 10%;

  :hover {
    background-color: #505055;
    cursor: pointer;
  }
`;

export const StyledDate = styled.div`
  padding: 3px;
  color: #F9F9F9;
`;
