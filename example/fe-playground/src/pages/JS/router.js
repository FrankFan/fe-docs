import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import NoMatch from '../../common/components/NoMatch';
import JSBasicPage from './components/Basic/';
import WebAnalyzer from './components/WebAnalyzer/';

const AppRouter = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={JSBasicPage} />
      <Route path="/basic" exact component={JSBasicPage} />
      <Route path="/analyzer" exact component={WebAnalyzer} />
      <Route component={NoMatch}/>
    </Switch>
  </HashRouter>
);

export default AppRouter;