import React from 'react';
import styled from 'styled-components';

import { Card, Header } from '../components';
import { Carousel } from '../components/Carousel';
import { Slide } from '../utils/types';
import { projects } from './../utils/mocks';

export const ProjectsPage = () => {
  const slides: Slide[] = projects.map((pro, index) => {
    return {
      key: index as unknown as string,
      content: (
        <Card
          title={pro.name}
          date={'Last update: ' + pro.last_update}
          imageUri={pro.image_uri}
          subTitle={'V' + pro.version}
          description={pro.description}
          link={pro.link}
        />
      ),
    };
  });

  return (
    <>
      <Header />
      <Title>Projects</Title>
      <Carousel slides={slides} />
    </>
  );
};

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-top: 50px;
`;
