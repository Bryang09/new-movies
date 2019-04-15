import React, { Component } from "react";

import TaskBar from "../../TaskBar/TaskBar";

class MovieDiscover extends Component {
  render() {
    const type = this.props.match.params.type;

    console.log(type);

    return (
      <div className="Discover">
        <TaskBar type={type} categorie="movies" />
      </div>
    );
  }
}

export default MovieDiscover;
