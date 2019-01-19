import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import JSBasicPage from './components/Basic/';
import NoMatch from '../../common/components/NoMatch';

const AppRouter = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={JSBasicPage} />
      <Route path="/basic" exact component={JSBasicPage} />
      <Route component={NoMatch}/>
    </Switch>
  </HashRouter>
);

export default AppRouter;