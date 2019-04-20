import React, { Component } from "react";

import axios from "axios";
import { BASE_REQUEST, API_KEY } from "../../keys";
import { withRouter } from "react-router-dom";

import Header from "./Header/Header";

import "./Actor.scss";
import Result from "./Results/Results";

class Actor extends Component {
  state = {
    details: null,
    movieCredits: null,
    tvCredits: null,
    credits: null,
    categorie: null
  };

  componentDidMount = () => {
    const { id, page } = this.props.match.params;
    axios
      .get(
        `${BASE_REQUEST}/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then(res => this.setState({ movieCredits: res.data.cast }, this.onWhich))
      .catch(err => console.log(err));
    axios
      .get(
        `${BASE_REQUEST}/person/${id}/tv_credits?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then(res => this.setState({ tvCredits: res.data.cast }, this.onWhich))
      .catch(err => console.log(err));
    axios
      .get(
        `${BASE_REQUEST}/person/${id}?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then(res => this.setState({ details: res.data }))
      .catch(err => console.log(err));
  };

  goBack = () => {
    this.props.history.goBack();
  };

  onMovies = () => {
    this.setState({ credits: this.state.movieCredits, categorie: "movie" });
  };

  onTv = () => {
    this.setState({ credits: this.state.tvCredits, categorie: "tv" });
  };

  onWhich = () => {
    const { movieCredits, tvCredits } = this.state;

    this.setState(
      movieCredits < tvCredits
        ? { credits: tvCredits, categorie: "tv" }
        : { credits: movieCredits, categorie: "movie" }
    );
  };

  render() {
    const { details, movieCredits, tvCredits, credits, categorie } = this.state;

    return (
      <>
        {details !== null &&
        movieCredits !== null &&
        tvCredits !== null &&
        credits !== null ? (
          <div className="Actor">
            <Header details={details} back={this.goBack} />
            <Result
              results={credits}
              movieNumber={movieCredits.length}
              tvNumber={tvCredits.length}
              tv={this.onTv}
              movies={this.onMovies}
              categorie={categorie}
            />
            {/* <Pagination
            results={totalPages}
            onForward={onForward}
            onBackward={onBackward}
            page={page}
          /> */}
          </div>
        ) : (
          <h1>Searching</h1>
        )}
      </>
    );
  }
}

export default withRouter(Actor);
