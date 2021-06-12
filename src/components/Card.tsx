import React, { FC } from 'react';
import {
  CardButton,
  CardButtonArea,
  CardContainer,
  CardContent,
  CardDate,
  CardDescription,
  CardImage,
  CardSubTitle,
  CardTitle,
} from '../styles';

type CardProps = {
  title?: string;
  description?: string;
  date?: string;
  imageUri?: string;
  subTitle?: string;
  link?: string;
};

export const Card: FC<CardProps> = ({
  title,
  subTitle,
  description,
  date,
  imageUri,
  link,
}) => {
  return (
    <CardContainer>
      {imageUri && <CardImage src={imageUri} alt="Alt" />}
      <CardContent>
        <CardDate>{date}</CardDate>
        {title && <CardTitle>{title}</CardTitle>}
        {subTitle && <CardSubTitle>{subTitle}</CardSubTitle>}
        <CardDescription>{description}</CardDescription>
        {link && (
          <CardButtonArea>
            <CardButton onClick={() => (window.location.href = link)}>
              Visit Site
            </CardButton>
          </CardButtonArea>
        )}
      </CardContent>
    </CardContainer>
  );
};
