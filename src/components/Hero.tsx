import React, { FC } from 'react';
import {
  Button,
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroSubTitle,
  HeroText,
  HeroTitle,
  HeroTitleText,
} from '../styles';
import { Header } from './Header';

export const Hero: FC = () => {
  return (
    <div>
      <HeroContainer>
        <Header />
        <HeroContent>
          <HeroContentText>
            <HeroTitle>
              <HeroTitleText>Midka.Dev</HeroTitleText>
            </HeroTitle>
            <HeroSubTitle>Coding Group</HeroSubTitle>
            <HeroText>We're a coding group of 1 people :D</HeroText>
            <HeroBtn to="/projects">
              <Button primary big bigFont bigRadius>
                Our Projects
              </Button>
            </HeroBtn>
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};
