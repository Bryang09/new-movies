import React from "react";

import { Switch, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Landing from "./Component/Landing/Landing";

const Routes = () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </ScrollToTop>
  );
};

export default Routes;
