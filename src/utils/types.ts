import React from 'react';

export interface Project {
  name: string;
  description: string;
  started_at: string;
  last_update: string;
  version: string;
  link: string;
  image_uri?: string;
}

export interface Slide {
  key: string;
  content: JSX.Element;
}
