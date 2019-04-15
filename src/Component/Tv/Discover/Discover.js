import React, { Component } from "react";

import TaskBar from "../../TaskBar/TaskBar";

class TVDiscover extends Component {
  render() {
    const type = this.props.match.params.type;
    return (
      <div className="Discover">
        <TaskBar type={type} categorie="tv" />
      </div>
    );
  }
}

export default TVDiscover;
