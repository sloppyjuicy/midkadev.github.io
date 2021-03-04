import * as React from 'react';
import { HeaderStyle, HeaderItem } from './../utils/styles';

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  return (
    <HeaderStyle>
      <HeaderItem>Moi</HeaderItem>
    </HeaderStyle>
  );
};
