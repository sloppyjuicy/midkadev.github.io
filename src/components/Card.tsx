import React, { FC } from 'react';
import { CardContainer, CardHeader } from '../styles';

type CardProps = {
  title: string;
  description: string;
  date: string;
  image: string;
};

export const Card: FC<CardProps> = () => {
  return (
    <div>
      <CardContainer>
        <CardHeader></CardHeader>
      </CardContainer>
    </div>
  );
};
