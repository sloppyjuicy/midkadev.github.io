import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Footer } from './components';
import { LandingPage, ProjectsPage } from './pages';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/projects" exact component={ProjectsPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
