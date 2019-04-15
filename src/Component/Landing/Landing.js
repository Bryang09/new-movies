import React, { Component } from "react";

import "./Landing.scss";

import Text from "./text/Text";

class Landing extends Component {
  state = {
    movieFull: false,
    tvFull: false,
    movieSearchButton: false,
    tvSearchButton: false,
    movieSearch: "",
    tvSearch: ""
  };
  onMovieHover = () => {
    this.setState({ movieFull: true });
  };
  onTvHover = () => {
    this.setState({ tvFull: true });
  };
  onMovieLeave = () => {
    this.setState({ movieFull: false, movieSearchButton: false });
  };
  onTvLeave = () => {
    this.setState({ tvFull: false, tvSearchButton: false });
  };

  onMovieSearchClick = () => {
    this.setState({ movieSearchButton: true });
  };

  onTvSearchClick = () => {
    this.setState({ tvSearchButton: true });
  };

  onMovieSearch = e => {
    this.setState({ movieSearch: e.target.value });
  };

  onTvSearch = e => {
    this.setState({ tvSearch: e.target.value });
  };

  render() {
    const {
      movieFull,
      tvFull,
      movieSearchButton,
      tvSearchButton,
      movieSearch,
      tvSearch
    } = this.state;

    return (
      <div className="Landing">
        <Text
          Full={movieFull}
          search={movieSearch}
          ifSearch={movieSearchButton}
          onHover={this.onMovieHover}
          onLeave={this.onMovieLeave}
          onSearchClick={this.onMovieSearchClick}
          onSearch={this.onMovieSearch}
          title="Search For Movies"
          categorie="movies"
          link="movies/discover"
          placeholder="Type Movie Name"
        />
        <Text
          Full={tvFull}
          search={tvSearch}
          ifSearch={tvSearchButton}
          onHover={this.onTvHover}
          onLeave={this.onTvLeave}
          onSearchClick={this.onTvSearchClick}
          onSearch={this.onTvSearch}
          title="Search For TV Shows"
          categorie="tv"
          link="tv/discover"
          placeholder="Type TV Show Name"
        />

        {/* <div
          className={tvFull ? "option tv full " : "option tv"}
          onMouseEnter={this.onTvHover}
          onMouseLeave={this.onTvLeave}
        >
          <div className="optionText">
            <h2>Search For TV Shows</h2>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default Landing;
