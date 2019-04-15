import React, { Component } from "react";

import TaskBar from "../../TaskBar/TaskBar";

import axios from "axios";
import { BASE_REQUEST, API_KEY } from "../../../keys";

class MovieDiscover extends Component {
  state = {
    results: null,
    page: this.props.match.params.page,
    type: this.props.match.params.type
  };

  componentDidMount = () => {
    // const page = this.props.match.params.page;
    // const type = this.props.match.params.type;

    // const { page, type } = this.props.match.params;

    const { page, type } = this.state;

    // https://api.themoviedb.org/3/movie/popular?api_key=736cb0f2a5061149d7b43012b1dada7e&language=en-US&page=1
    axios
      .get(
        `${BASE_REQUEST}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  render() {
    const { results, page, type } = this.state;

    console.log(results, page, type);

    return (
      <div className="Discover">
        <TaskBar type={type} categorie="movies" />
      </div>
    );
  }
}

export default MovieDiscover;
