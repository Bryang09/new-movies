import React, { Component } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./TaskBar.scss";

class TaskBar extends Component {
  render() {
    const { type } = this.props;
    return (
      <div className="Task">
        <Link to="/">
          <div className="link homeLink">
            <div className="logo" />
            <h4>Home</h4>
          </div>
        </Link>
        <Link to="/movies/discover/all">
          <div className={type === "all" ? "link activeLink" : "link"}>
            <FontAwesomeIcon icon="check" color="#fff" size="2x" />
            <h4>All</h4>
          </div>
        </Link>
        <Link to="/movies/discover/popular">
          <div className={type === "popular" ? "link activeLink" : "link"}>
            <FontAwesomeIcon icon="fire" color="#fff" size="2x" />
            <h4>Popular</h4>
          </div>
        </Link>
        <Link to="/movies/discover/top">
          <div className={type === "top" ? "link activeLink" : "link"}>
            <FontAwesomeIcon icon="trophy" color="#fff" size="2x" />
            <h4>Top Rated</h4>
          </div>
        </Link>
        <Link to="/movies/discover/now-playing">
          <div className={type === "now-playing" ? "link activeLink" : "link"}>
            <FontAwesomeIcon icon="film" color="#fff" size="2x" />
            <h4>Now Playing</h4>
          </div>
        </Link>
        <Link to="/movies/discover/upcoming">
          <div className={type === "upcoming" ? "link activeLink" : "link"}>
            <FontAwesomeIcon icon="calendar-alt" color="#fff" size="2x" />
            <h4>Upcoming</h4>
          </div>
        </Link>
      </div>
    );
  }
}

export default TaskBar;
