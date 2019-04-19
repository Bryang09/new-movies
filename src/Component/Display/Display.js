import React, { Component } from "react";

import Pagination from "../Pagination/Pagination";
import Result from "../Results/Result";
import TaskBar from "../TaskBar/TaskBar";
import axios from "axios";
import { BASE_REQUEST, API_KEY } from "../../keys";

class Display extends Component {
  state = {
    movieGenres: null,
    tvGenres: null
  };

  // componentDidMount = () => {
  //   const {
  //     type,
  //     categorie,
  //     results,
  //     resultType,
  //     totalPages,
  //     onForward,
  //     onBackward,
  //     page
  //   } = this.props;
  //   axios
  //     .get(`${BASE_REQUEST}/genre/${resultType}/list?api_key=${API_KEY}`)
  //     .then(res => console.log(res))
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    const {
      type,
      categorie,
      results,
      resultType,
      totalPages,
      onForward,
      onBackward,
      page
    } = this.props;
    console.log(this.props.genres);

    return (
      <div className="Discover">
        <TaskBar type={type} categorie={categorie} />
        <div className="results">
          <div className="resultContainer">
            <Result results={results} type={resultType} />

            <Pagination
              results={totalPages}
              onForward={onForward}
              onBackward={onBackward}
              page={page}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
