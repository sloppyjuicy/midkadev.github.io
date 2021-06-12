import React from 'react';
import { Header, Card } from '../components';
import { ProjectsContainer } from '../styles';
import { projects } from './../utils/mocks';

export const ProjectsPage = () => {
  return (
    <>
      <Header />
      <ProjectsContainer>
        {projects.map((pro) => {
          return <Card />;
        })}
      </ProjectsContainer>
    </>
  );
};
