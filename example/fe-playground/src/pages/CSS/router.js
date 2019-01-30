import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import NoMatch from '../../common/components/NoMatch';
import FloatPage from './components/float/float';
import BFCPage from './components/BFC/bfc';
import CenterPage from './components/center/center';
import PositionPage from './components/position/';
import LayoutPage from './components/layout/';
import ResponsiveSquarePage from "./components/square";


const AppRouter = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={BFCPage} />
      <Route path="/bfc" exact component={BFCPage} />
      <Route path="/float" exact component={FloatPage} />
      <Route path="/center" exact component={CenterPage} />
      <Route path="/position" exact component={PositionPage} />
      <Route path="/layout" exact component={LayoutPage} />
      <Route path="/square" exact component={ResponsiveSquarePage} />
      <Route component={NoMatch}/>
    </Switch>
  </HashRouter>
);

export default AppRouter;