import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrophy, faFire, faFilm } from "@fortawesome/free-solid-svg-icons";
import * as serviceWorker from "./serviceWorker";

library.add(faTrophy, faFilm, faFire);

ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
