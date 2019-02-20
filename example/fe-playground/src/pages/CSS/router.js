import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import NoMatch from '../../common/components/NoMatch';
import Sidebar from './components/sidebar/';
import FloatPage from './components/float/';
import BFCPage from './components/BFC/';
import CenterPage from './components/center/';
import PositionPage from './components/position/';
import LayoutPage from './components/layout/';
import ResponsiveSquarePage from "./components/square";

const AppRouter = () => (
  <HashRouter>
    <section>
      <Sidebar />
      <main>
        <Switch>
          <Route path="/" exact component={Sidebar} />
          <Route path="/bfc" component={BFCPage} />
          <Route path="/float" component={FloatPage} />
          <Route path="/center" component={CenterPage} />
          <Route path="/position" component={PositionPage} />
          <Route path="/layout" component={LayoutPage} />
          <Route path="/square" component={ResponsiveSquarePage} />
          <Route component={NoMatch}/>
        </Switch>
      </main>
    </section>
  </HashRouter>
);

export default AppRouter;