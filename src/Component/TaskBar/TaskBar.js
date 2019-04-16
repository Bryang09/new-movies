import React, { Component } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./TaskBar.scss";

class TaskBar extends Component {
  render() {
    const { type, categorie, popular, top } = this.props;
    return (
      <div className="Task">
        <Link to="/">
          <div className="link homeLink">
            <div className="logo" />
            <h4>Home</h4>
          </div>
        </Link>
        {/* <Link to={`/${categorie}/discover/all`}>
          <div className={type === "all" ? "link activeLink" : "link"}>
            <FontAwesomeIcon icon="check" color="#fff" size="2x" />
            <h4>All</h4>
          </div>
        </Link> */}

        <Link to={`/${categorie}/discover/1/popular`}>
          <div className={type === "popular" ? "link activeLink" : "link"}>
            <FontAwesomeIcon icon="fire" color="#fff" size="2x" />
            <h4>Popular</h4>
          </div>
        </Link>
        <Link to={`/${categorie}/discover/1/top_rated`}>
          <div className={type === "top_rated" ? "link activeLink" : "link"}>
            <FontAwesomeIcon icon="trophy" color="#fff" size="2x" />
            <h4>Top Rated</h4>
          </div>
        </Link>
        {categorie === "movies" ? (
          <Link to={`/${categorie}/discover/1/now_playing`}>
            <div
              className={type === "now_playing" ? "link activeLink" : "link"}
            >
              <FontAwesomeIcon icon="film" color="#fff" size="2x" />
              <h4>Now Playing</h4>
            </div>
          </Link>
        ) : (
          <Link to={`/${categorie}/discover/1/on_the_air`}>
            <div className={type === "on_the_air" ? "link activeLink" : "link"}>
              <FontAwesomeIcon icon="tv" color="#fff" size="2x" />
              <h4>Still Airing</h4>
            </div>
          </Link>
        )}

        {categorie === "movies" ? (
          <Link to={`/${categorie}/discover/1/upcoming`}>
            <div className={type === "upcoming" ? "link activeLink" : "link"}>
              <FontAwesomeIcon icon="calendar-alt" color="#fff" size="2x" />
              <h4>Upcoming</h4>
            </div>
          </Link>
        ) : (
          <Link to={`/${categorie}/discover/1/latest`}>
            <div className={type === "latest" ? "link activeLink" : "link"}>
              <FontAwesomeIcon icon="calendar-alt" color="#fff" size="2x" />
              <h4>Latest</h4>
            </div>
          </Link>
        )}
      </div>
    );
  }
}

export default TaskBar;
