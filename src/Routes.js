import React from "react";

import { Switch, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Landing from "./Component/Landing/Landing";
// MOVIE DISCOVER
import MovieDiscover from "./Component/Movies/Discover/Discover";
import MovieDiscoverTop from "./Component/Movies/Discover/Top";
import MovieDiscoverPlaying from "./Component/Movies/Discover/Playing";
import MovieDiscoverUpcoming from "./Component/Movies/Discover/Upcoming";
// TV DISCOVER
import TVDiscover from "./Component/Tv/Discover/Discover";
import TVDiscoverTop from "./Component/Tv/Discover/Top";
import TVDiscoverAiring from "./Component/Tv/Discover/Airing";
import TVDiscoverToday from "./Component/Tv/Discover/Today";

import Single from "./Component/Single/Single";

import Search from "./Component/Search/Search";
import Actor from "./Component/Actor/Actor";
import Credit from "./Component/Credit/Credit";

const Routes = () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Landing} />

        {/* DISCOVER MOVIES */}
        <Route
          path="/movies/discover/:page/popular"
          render={
            props => <MovieDiscover key={props.match.params.page} {...props} />
            // )
          }
        />
        <Route
          path="/movies/discover/:page/top_rated"
          render={
            props => (
              <MovieDiscoverTop key={props.match.params.page} {...props} />
            )
            // )
          }
        />
        <Route
          path="/movies/discover/:page/now_playing"
          render={
            props => (
              <MovieDiscoverPlaying key={props.match.params.page} {...props} />
            )
            // )
          }
        />
        <Route
          path="/movies/discover/:page/upcoming"
          render={
            props => (
              <MovieDiscoverUpcoming key={props.match.params.page} {...props} />
            )
            // )
          }
        />
        {/* <Route
          path="/movie/:id"
          render={
            props => <Single key={props.match.params.id} {...props} />
            // )
          }
        /> */}
        {/* END OF DISCOVER MOVIES */}

        {/* DISCOVER TV */}

        <Route
          exact
          path="/tv/discover/:page/popular"
          render={props => (
            <TVDiscover key={props.match.params.page} {...props} />
          )}
        />
        <Route
          exact
          path="/tv/discover/:page/top_rated"
          render={props => (
            <TVDiscoverTop key={props.match.params.page} {...props} />
          )}
        />
        <Route
          exact
          path="/tv/discover/:page/on_the_air"
          render={props => (
            <TVDiscoverAiring key={props.match.params.page} {...props} />
          )}
        />
        <Route
          exact
          path="/tv/discover/:page/airing_today"
          render={props => (
            <TVDiscoverToday key={props.match.params.page} {...props} />
          )}
        />
        {/* <Route
          path="/tv/:id"
          render={props => (
            <SingleTv key={props.match.params.page} {...props} />
          )}
        /> */}

        {/* END DISCOVER TV */}

        {/* SINGLE MOVIE OR TV SHOW */}
        <Route
          exact
          path="/:type/:id"
          render={
            props => <Single key={props.match.params.id} {...props} />
            // )
          }
        />
        <Route
          exact
          path="/search/:type/:page/:query"
          render={
            props => <Search key={props.match.params.page} {...props} />
            // )
          }
        />

        <Route
          exact
          path="/actor/:page/:id"
          render={
            props => <Actor key={props.match.params.page} {...props} />
            // )
          }
        />

        <Route
          exact
          path="/credit/actor/:creditId"
          render={
            props => <Credit key={props.match.params.id} {...props} />
            // )
          }
        />
      </Switch>
    </ScrollToTop>
  );
};

export default Routes;
