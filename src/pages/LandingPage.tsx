import React from 'react';
import { Header } from '../components';
import { Button, ButtonText } from '../utils/styles';

export const LandingPage = () => {
  return (
    <div className='landing'>
      <Header />
      <Button>
        <ButtonText>Let's Go</ButtonText>
      </Button>
    </div>
  );
};
