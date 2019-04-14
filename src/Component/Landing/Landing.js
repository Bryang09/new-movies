import React, { Component } from "react";

import "./Landing.scss";

import { Link } from "react-router-dom";

class Landing extends Component {
  state = {
    movieFull: false,
    tvFull: false,
    search: false
  };
  onMovieHover = () => {
    this.setState({ movieFull: true });
  };
  onTvHover = () => {
    this.setState({ tvFull: true });
  };
  onMovieLeave = () => {
    this.setState({ movieFull: false });
  };
  onTvLeave = () => {
    this.setState({ tvFull: false });
  };

  onSearchClick = () => {
    this.setState({ search: true });
  };
  render() {
    const { movieFull, tvFull, search } = this.state;
    return (
      <div className="Landing">
        <div
          className={movieFull ? "option movie full" : "option movie"}
          onMouseEnter={this.onMovieHover}
          onMouseLeave={this.onMovieLeave}
        >
          <div className="optionText">
            <h2>Search For Movies</h2>

            <div className="buttons">
              <div
                className={
                  search ? "option discover noDiscover" : "option discover"
                }
              >
                <Link to="/movies">
                  <h5>Discover</h5>
                </Link>
              </div>
              <div
                className={
                  search ? "option search searchActive" : "option search"
                }
                onClick={this.onSearchClick}
              >
                <h5>Search</h5>
              </div>
            </div>

            <div className="searchBar">
              <h5>searchbar</h5>
            </div>
          </div>
        </div>

        <div
          className={tvFull ? "option tv full " : "option tv"}
          onMouseEnter={this.onTvHover}
          onMouseLeave={this.onTvLeave}
        >
          <div className="optionText">
            <h2>Search For TV Shows</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
