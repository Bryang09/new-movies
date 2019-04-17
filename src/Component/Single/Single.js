import React, { Component } from "react";

import axios from "axios";
import { BASE_REQUEST, API_KEY } from "../../keys";

import Header from "./Header/Header";

import "./Single.scss";
import TaskBar from "../TaskBar/TaskBar";
import Cast from "./Cast/Cast";

class Single extends Component {
  state = {
    result: null,
    cast: null
  };

  componentDidMount = () => {
    const { id, type } = this.props.match.params;
    axios
      .get(`${BASE_REQUEST}/${type}/${id}?api_key=${API_KEY}`)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
    axios
      .get(`${BASE_REQUEST}/${type}/${id}/credits?api_key=${API_KEY}`)
      .then(res => this.setState({ cast: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    const { type } = this.props.match.params;
    const { result, cast } = this.state;

    return (
      <div className="Single">
        {type === "movie" && result !== null && cast !== null ? (
          <div className="SingleContainer">
            <TaskBar categorie={type === "movie" ? "movies" : "tv"} />
            <Header result={result} />
            <Cast cast={cast} />
          </div>
        ) : (
          <div className="SingleContainer">
            <TaskBar categorie={type === "movie" ? "movies" : "tv"} />
          </div>
        )}
      </div>
    );
  }
}

export default Single;