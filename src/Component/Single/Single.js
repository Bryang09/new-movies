import React, { Component } from "react";

import axios from "axios";
import { BASE_REQUEST, API_KEY } from "../../keys";

import Header from "./Header/Header";

import "./Single.scss";
import TaskBar from "../TaskBar/TaskBar";

class Single extends Component {
  state = {
    result: null,
    cast: null
  };

  componentDidMount = () => {
    const { id, type } = this.props.match.params;
    axios
      .get(`${BASE_REQUEST}/${type}/${id}?api_key=${API_KEY}`)
      // .then(res => console.log(res))
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
    axios
      // `${BASE_REQUEST}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      .get(`${BASE_REQUEST}/${type}/${id}/credits?api_key=${API_KEY}`)
      // .then(res => console.log(res))
      .then(res => this.setState({ cast: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    const { type } = this.props.match.params;
    const { result, cast } = this.state;

    console.log(type);
    console.log(cast);

    console.log(this.state.result);
    return (
      <div className="Single">
        {type === "movie" && result !== null ? (
          <div className="SingleContainer">
            <TaskBar categorie={type === "movie" ? "movies" : "tv"} />
            <Header result={result} />
          </div>
        ) : (
          <h1>Not Here Yet</h1>
        )}
      </div>
    );
  }
}

export default Single;
