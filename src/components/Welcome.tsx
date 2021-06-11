import React, { FC } from 'react';
import {
  WelcomeContainer,
  WelcomeContent,
  WelcomeImg,
  WelcomeContentText,
  WelcomeContentTitle,
  WelcomeText,
  Img,
} from '../styles';
import photo from './../assets/welcome2.jpg';

export const Welcome: FC = () => {
  return (
    <WelcomeContainer>
      <WelcomeContent>
        <WelcomeImg>
          <Img src={photo} alt="Phone photo related to coding" />
        </WelcomeImg>
        <WelcomeContentText>
          <WelcomeContentTitle>Welcome</WelcomeContentTitle>
          <WelcomeText>
            Coding is a great way to spend your time fixing very easy bugs and
            feeling useless. But never forget why you are coding. And also if
            you code something useful it might make the world a better place. 🙂
          </WelcomeText>
          <WelcomeText>
            Feel free to make this website better however you see fit. Just
            follow the contribution guidelines in{' '}
            <a href="https://github.com/MidkaDev/midkadev.github.io">github</a>.
            😉
          </WelcomeText>
        </WelcomeContentText>
      </WelcomeContent>
    </WelcomeContainer>
  );
};
