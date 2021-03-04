import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const HeaderItem = styled.div`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const FooterStyle = styled.div`
  height: 5vh;
  background-color: ${({ theme }) => theme.colors.main};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
