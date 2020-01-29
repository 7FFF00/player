import styled from 'styled-components';

const styles = {
  StyledDiv: styled.div`
    font-family: Arial;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  `,

  RightDiv: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `,

  StyledArtist: styled.div`
    width: max-content;
    margin: 3px;
    padding: 3px;
    background-color: #202020;
    color: #C0C0C0;

    :hover {
      color: #F9F9F9;
      cursor: pointer;
    }
  `,

  StyledTitle: styled.div`
    width: max-content;
    margin: 3px;
    padding: 8px;
    background-color: #202020;
    color: #F9F9F9;
    font-size: 24px;
  `,

  StyledPlaylist: styled.div`
    width: max-content;
    margin: 3px;
    padding: 3px;
    background-color: #202020;
    color: #F9F9F9;
  `,

  StyledTags: styled.div`
    width: max-content;
    padding: 2px 8px 2px 8px;
    background-color: #909095;
    color: #F9F9F9;
    border-radius: 30px;

    :hover {
      background-color: #505055;
      cursor: pointer;
    }
  `,

  StyledDate: styled.div`
    padding: 3px;
    color: #F9F9F9;
  `,
};

export default styles;
