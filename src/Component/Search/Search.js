import React, { Component } from "react";

import { Link } from "react-router-dom";

import axios from "axios";
// import { BASE_REQUEST, API_KEY } from "../../../keys";

// import "./Discover.scss";

import { withRouter } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import TaskBar from "../TaskBar/TaskBar";
import { BASE_REQUEST, API_KEY } from "../../keys";
import Result from "../Results/Result";

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

    const { type, query } = this.props.match.params;

    console.log(this.state.results);
    return (
      <div className="Discover">
        <TaskBar
          type="popular"
          categorie={type === "movie" ? "movies" : "tv"}
        />

        <div className="results">
          <div className="resultContainer">
            {results !== null ? (
              <Result results={results} type={type} />
            ) : (
              <h1>Searching ...</h1>
            )}
            <br />
            <Pagination
              results={totalPages}
              onForward={this.onForward}
              onBackward={this.onBackward}
              page={page}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
