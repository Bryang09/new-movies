import React, { Component } from "react";

import { Link } from "react-router-dom";

import TaskBar from "../../TaskBar/TaskBar";

import axios from "axios";
import { BASE_REQUEST, API_KEY } from "../../../keys";

import Pagination from "../../Pagination/Pagination";

import { withRouter } from "react-router-dom";

class TVDiscoverTop extends Component {
  state = {
    results: null,
    page: this.props.match.params.page,
    totalPages: 1
  };

  componentDidMount = () => {
    const { page } = this.state;
    axios
      .get(
        `${BASE_REQUEST}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
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

    this.props.history.push(`/tv/discover/${newPage}/top_rated`);
  };

  onBackward = e => {
    const { page } = this.state;

    const newPage = page !== parseInt(1) ? parseInt(page) - 1 : 1;

    this.props.history.push(`/tv/discover/${newPage}/top_rated`);
  };

  render() {
    const { results, totalPages, page } = this.state;

    const res =
      results !== null ? (
        results.map((res, i) => {
          return (
            <Link to={`/${res.id}`} key={i}>
              <div
                className="result"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
                    res.poster_path
                  })`
                }}
              >
                <div className="text">
                  <h3>{res.name}</h3>
                  <h4>{res.overview.substr(0, 100)}...</h4>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <h1>Searching</h1>
      );

    return (
      <div className="Discover">
        <TaskBar type={"top_rated"} categorie="tv" />

        <div className="results">
          <div className="resultContainer">
            {results !== null ? res : <h1>Searching ...</h1>}
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

export default withRouter(TVDiscoverTop);
