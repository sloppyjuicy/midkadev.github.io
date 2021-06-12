import React from 'react';

import { Header } from '../components';
import { ProjectsContainer } from '../styles';
import { projects } from './../utils/mocks';

export const ProjectsPage = () => {
  return (
    <>
      <Header />

      {projects.map((pro) => {
        return <div></div>;
      })}
    </>
  );
};
