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
            <HeroSubTitle>Developer</HeroSubTitle>
            <HeroText>I'm a Full-Stack developer</HeroText>
            <HeroBtn to="/projects">
              <Button primary big bigFont bigRadius>
                My Projects
              </Button>
            </HeroBtn>
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};
