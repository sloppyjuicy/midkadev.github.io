import styled from 'styled-components';

// Basic stuff

export const Button = styled.button`
  border: none;
  position: absolute;
  width: 226px;
  height: 66px;
  left: 847px;
  top: 354px;
  background-color: #25b2aa;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  display: flex;
`;

export const ButtonText = styled.p`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 1.43%;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

// Footer styles

export const FooterStyle = styled.div`
  height: 5vh;
  background-color: ${({ theme }) => theme.colors.main};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

// Header styles

export const HeaderItem = styled.div`
  font-size: 36px;
  margin: 0 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 10vh;
  background-color: transparent;
`;

// Images

export const Logo = styled.img`
  width: 145px;
  height: 141.72px;
`;
