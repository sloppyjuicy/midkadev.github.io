import React, { FC } from 'react';
import {
  CardButton,
  CardButtonArea,
  CardContainer,
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
} from '../styles';

type CardProps = {
  title?: string;
  description?: string;
  date?: string;
  image?: {
    uri: string;
    alt: string;
  };
  version?: string;
};

export const Card: FC<CardProps> = ({
  title,
  version,
  description,
  date,
  image,
}) => {
  return (
    <CardContainer>
      {image && <CardImage src={image.uri} alt={image.alt} />}
      <CardContent>
        {title && <CardTitle>{title}</CardTitle>}
        <CardDescription>{description}</CardDescription>
        <CardButtonArea>
          <CardButton>Visit Site</CardButton>
        </CardButtonArea>
      </CardContent>
    </CardContainer>
  );
};
