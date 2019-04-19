import React, { Component } from "react";

import axios from "axios";
import { BASE_REQUEST, API_KEY } from "../../keys";
import { withRouter } from "react-router-dom";

import Header from "./Header/Header";

import "./Actor.scss";

class Actor extends Component {
  state = {
    details: null,
    credits: null
  };

  componentDidMount = () => {
    const { id, page } = this.props.match.params;
    axios
      .get(
        `${BASE_REQUEST}/person/${id}/combined_credits?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then(res => this.setState({ credits: res.data.cast }))
      .catch(err => console.log(err));
    axios
      .get(
        `${BASE_REQUEST}/person/${id}?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      // .then(res => console.log(res.data))
      .then(res => this.setState({ details: res.data }))
      .catch(err => console.log(err));
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { details, credits } = this.state;
    console.log(details, credits);
    return (
      <>
        {details !== null && credits !== null ? (
          <div className="Actor">
            <Header details={details} back={this.goBack} />
            <hr />
          </div>
        ) : (
          <h1>Searching</h1>
        )}
      </>
    );
  }
}

export default withRouter(Actor);
