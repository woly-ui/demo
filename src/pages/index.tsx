import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from "components/templates/layout";

const App = () => (
  <Switch>
    <Route exact path="/" component={Layout} />
  </Switch>
);

export default App;
