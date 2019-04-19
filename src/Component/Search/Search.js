import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { BASE_REQUEST, API_KEY } from "../../keys";

import axios from "axios";

import Display from "../Display/Display";

class Search extends Component {
  state = {
    results: null,
    page: this.props.match.params.page,
    totalPages: 1
  };

  componentDidMount = () => {
    const { type, query, page } = this.props.match.params;
    axios
      .get(
        `${BASE_REQUEST}/search/${type}?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}`
      )
      .then(res =>
        this.setState({
          results: res.data.results,
          totalPages: res.data.total_pages
        })
      )
      // .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  onForward = e => {
    const { type, query, page } = this.props.match.params;

    const newPage = page !== parseInt(10) ? parseInt(page) + 1 : 10;

    this.props.history.push(`/search/${type}/${newPage}/${query}`);
  };

  onBackward = e => {
    const { type, query, page } = this.props.match.params;

    const newPage = page !== parseInt(1) ? parseInt(page) - 1 : 1;

    this.props.history.push(`/search/${type}/${newPage}/${query}`);
  };

  render() {
    const { results, totalPages, page } = this.state;

    const { type } = this.props.match.params;

    console.log(this.state.results);
    return (
      <>
        {results !== null ? (
          <Display
            type="popular"
            categorie={type === "movie" ? "movies" : "tv"}
            results={results}
            resultType={type}
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

export default withRouter(Search);
