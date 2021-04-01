import * as React from 'react';
import logo from './../assets/logo.svg';
import { HeaderStyle, HeaderItem, Logo } from './../utils/styles';

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  return (
    <HeaderStyle>
      <Logo src={logo} alt='Logo' />
      <HeaderItem>Projects</HeaderItem>
      <HeaderItem>About</HeaderItem>
    </HeaderStyle>
  );
};
