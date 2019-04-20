import React, { Component } from "react";

import "./Landing.scss";

import { Link } from "react-router-dom";
import First from "./Options/first";
import Second from "./Options/second";
import Third from "./Options/third";

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

        <First
          optionNumber={optionNumber}
          movie={this.onMovie}
          tv={this.onTV}
        />

        <Second
          optionNumber={optionNumber}
          movie={this.onMovie}
          tv={this.onTV}
          categorie={categorie}
        />

        <Third
          optionNumber={optionNumber}
          movie={this.onMovie}
          tv={this.onTV}
          categorie={categorie}
          input={this.onInput}
          search={search}
        />
      </div>
    );
  }
}

export default Landing;
