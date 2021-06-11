import React, { useEffect, useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

import {
  Menu,
  MenuIcon,
  MenuItem,
  MenuLink,
  NavbarContainer,
  NavIcon,
  NavLogo,
  NavStyle,
  MenuItemBtn,
  MenuLinkBtn,
  Button,
} from './../styles';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
    <NavStyle>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
        </NavLogo>

        <MenuIcon onClick={handleClick}>
          {click ? <BiX /> : <BiMenu />}
        </MenuIcon>

        <Menu onClick={handleClick} click={click}>
          <MenuItem>
            <MenuLink onClick={closeMenu} to="/">
              Home
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink onClick={closeMenu} to="/about">
              About
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink onClick={closeMenu} to="/projects">
              Projects
            </MenuLink>
          </MenuItem>

          <MenuItemBtn to="#">
            {button ? (
              <MenuLinkBtn to="/contact">
                <Button primary>Contact</Button>
              </MenuLinkBtn>
            ) : (
              <MenuLinkBtn to="/contact">
                <Button primary bigFont onClick={closeMenu}>
                  Contact
                </Button>
              </MenuLinkBtn>
            )}
          </MenuItemBtn>
        </Menu>
      </NavbarContainer>
    </NavStyle>
  );
};
