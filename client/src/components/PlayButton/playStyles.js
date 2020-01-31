import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledButton = styled.a`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF5500;
  border-radius: 50%;
  margin: 2px 8px 2px 2px;

  :hover {
    background-color: #ED4500;
  }
`;
