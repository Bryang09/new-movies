import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { BASE_REQUEST, API_KEY } from "../../../keys";

import axios from "axios";

import Display from "../../Display/Display";

import "./Discover.scss";

class MovieDiscover extends Component {
  state = {
    results: null,
    page: this.props.match.params.page,
    totalPages: 1
  };

  componentDidMount = () => {
    const { page } = this.state;
    axios
      .get(
        `${BASE_REQUEST}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then(res =>
        this.setState({
          results: res.data.results,
          totalPages: res.data.total_pages
        })
      )
      .catch(err => console.log(err));

    axios
      .get(`${BASE_REQUEST}/genre/movie/list?api_key=${API_KEY}`)
      .then(res => this.setState({ genres: res.data }))
      .catch(err => console.log(err));
  };

  onForward = e => {
    const { page } = this.state;

    const newPage = page !== parseInt(10) ? parseInt(page) + 1 : 10;

    this.props.history.push(`/movies/discover/${newPage}/popular`);
  };

  onBackward = e => {
    const { page } = this.state;

    const newPage = page !== parseInt(1) ? parseInt(page) - 1 : 1;

    this.props.history.push(`/movies/discover/${newPage}/popular`);
  };

  onSelect = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { results, totalPages, page, genres } = this.state;

    return (
      <>
        {results !== null ? (
          <>
            <Display
              type="popular"
              categorie="movies"
              results={results}
              resultType="movie"
              totalPages={totalPages}
              onForward={this.onForward}
              onBackward={this.onBackward}
              page={page}
              genres={genres}
              select={this.onSelect}
            />
          </>
        ) : (
          <h1>Searching...</h1>
        )}
      </>
    );
  }
}

export default withRouter(MovieDiscover);
