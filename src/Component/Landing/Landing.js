import React, { Component } from "react";

import "./Landing.scss";

import { Link } from "react-router-dom";

class Landing extends Component {
  state = {
    optionNumber: 1,
    categorie: null,
    search: ""
  };

  onMovie = () => {
    this.setState({
      categorie: "movies",
      optionNumber: this.state.optionNumber + 1
    });
  };

  onTV = () => {
    this.setState({
      categorie: "tv",
      optionNumber: this.state.optionNumber + 1
    });
  };

  onInput = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { optionNumber, categorie, search } = this.state;

    console.log(this.state);
    return (
      <div className="Landing">
        <h1>What are you searching for?</h1>

        <div
          className={
            optionNumber === 1
              ? "options firstOptions activeOption"
              : "options firstOptions notActive"
          }
        >
          <h3 onClick={this.onMovie}>Movies</h3>
          <h3 onClick={this.onTV}>TV Shows</h3>
        </div>

        <div
          className={
            optionNumber === 2
              ? "options  secondOptions activeOption"
              : "options secondOptions notActive"
          }
        >
          <Link to={`/${categorie}/discover/1/popular`}>
            <h3>Discover</h3>
          </Link>
          {categorie === "tv" ? (
            <h3 onClick={this.onTV}>Search</h3>
          ) : (
            <h3 onClick={this.onMovie}>Search</h3>
          )}
        </div>

        <div
          className={
            optionNumber === 3
              ? "options  secondOptions activeOption"
              : "options secondOptions notActive"
          }
        >
          <form onChange={this.onInput}>
            <input
              type="text"
              placeholder={
                categorie === "tv" ? "Type TV Show Name" : "Type Movie Name"
              }
              onChange={this.onInput}
            />

            <Link
              to={
                categorie === "movies"
                  ? `/search/movie/1/${search}`
                  : `/search/${categorie}/1/${search}`
              }
            >
              {search.length > 0 ? (
                <button type="submit" style={{ display: "none" }} />
              ) : (
                <button type={"submit"} disabled style={{ display: "none" }} />
              )}
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Landing;
