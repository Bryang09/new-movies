import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { BASE_REQUEST, API_KEY } from "../../../keys";

import axios from "axios";

import Display from "../../Display/Display";

class MovieDiscoverTop extends Component {
  state = {
    results: null,
    page: this.props.match.params.page,
    // type: this.props.match.params.type,
    totalPages: 1
  };

  componentDidMount = () => {
    const { page } = this.state;
    axios
      .get(
        `${BASE_REQUEST}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then(res =>
        this.setState({
          results: res.data.results,
          totalPages: res.data.total_pages
        })
      )
      .catch(err => console.log(err));
  };

  onForward = e => {
    const { page } = this.state;

    const newPage = page !== parseInt(10) ? parseInt(page) + 1 : 10;
    this.props.history.push(`/movies/discover/${newPage}/top_rated`);
  };

  onBackward = e => {
    const { page } = this.state;

    const newPage = page !== parseInt(1) ? parseInt(page) - 1 : 1;

    this.props.history.push(`/movies/discover/${newPage}/top_rated`);
  };

  render() {
    const { results, totalPages, page } = this.state;

    return (
      <>
        {results !== null ? (
          <Display
            type="top_rated"
            categorie="movies"
            results={results}
            resultType="movie"
            totalPages={totalPages}
            onForward={this.onForward}
            onBackward={this.onBackward}
            page={page}
          />
        ) : (
          <h1>Searching...</h1>
        )}
      </>
    );
  }
}

export default withRouter(MovieDiscoverTop);
