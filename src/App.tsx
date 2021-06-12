import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LandingPage } from './pages';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
    </Switch>
  );
}

export default App;
