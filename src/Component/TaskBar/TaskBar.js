import React, { Component } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./TaskBar.scss";

class TaskBar extends Component {
  render() {
    return (
      <div className="Task">
        <Link to="/">
          <div className="link homeLink">
            <div className="logo" />
          </div>
        </Link>
        <Link to="/movies/discover/popular">
          <div className="link">
            <FontAwesomeIcon icon="fire" color="#fff" size="2x" />
          </div>
        </Link>
        <Link to="/movies/discover/top">
          <div className="link">
            <FontAwesomeIcon icon="top" color="#fff" size="2x" />
          </div>
        </Link>
      </div>
    );
  }
}

export default TaskBar;
