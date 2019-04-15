import React from "react";

import { Switch, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Landing from "./Component/Landing/Landing";
import MovieDiscover from "./Component/Movies/Discover/Discover";
import TVDiscover from "./Component/Tv/Discover/Discover";
import MovieSearch from "./Component/Movies/Search/Search";
import TVSearch from "./Component/Tv/Search/Search";

const Routes = () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/movies/discover" component={MovieDiscover} />
        <Route exact path="/tv/discover" component={TVDiscover} />
        <Route exact path="/movies/:search" component={MovieSearch} />
        <Route exact path="/tv/:search" component={TVSearch} />
      </Switch>
    </ScrollToTop>
  );
};

export default Routes;
