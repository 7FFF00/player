import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-image: linear-gradient(${Math.floor(Math.random() * 360)}deg, #8080A0, #807080);
  font-family: Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-size: 16px;
  min-width: 1000px;
  height: 380px;
  display: flex;
  justify-content: space-between;
`;

export const VerticalDiv = styled.div`
  margin: 8px;
  width: 100%;
  height: 93%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HorizontalDiv = styled.div`
  margin: 28px 8px 8px 8px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
