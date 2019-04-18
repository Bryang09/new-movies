import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

class Recommended extends Component {
  state = {
    max: 4,
    min: 0
  };

  onArrowRight = () => {
    this.setState({ max: this.state.max + 5, min: this.state.min + 5 });
  };
  onArrowLeft = () => {
    this.setState({ max: this.state.max - 5, min: this.state.min - 5 });
  };

  render() {
    console.log(this.props);

    const { results } = this.props.recommended;
    const { type } = this.props;
    const { min, max } = this.state;

    console.log(results);
    const mapRecommended = results
      .filter((res, i) => i >= min && i < max)
      .map(res => {
        return (
          <div className="castMember" key={res.id}>
            <Link to={`/${type}/${res.id}`}>
              <div
                className="img"
                style={
                  res.profile_path !== null
                    ? {
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
                          res.poster_path
                        })`
                      }
                    : { backgroundColor: "#eee" }
                }
              />
            </Link>

            <h5>{type === "tv" ? res.name : res.title}</h5>
          </div>
        );
      });

    return (
      <div className="Cast">
        <h4>Recommended</h4>

        <div className="castContainer">
          <div className="leftArrow">
            <FontAwesomeIcon
              icon="arrow-left"
              size="2x"
              color="#3c3c3c"
              onClick={this.onArrowLeft}
              style={
                min > 0
                  ? { color: "inherit" }
                  : {
                      color: "#e0e0e0",
                      pointerEvents: "none"
                    }
              }
            />
          </div>

          {mapRecommended}
          <div className="rightArrow">
            <FontAwesomeIcon
              icon="arrow-right"
              size="2x"
              color="#3c3c3c"
              onClick={this.onArrowRight}
              style={
                max < results.length - 1
                  ? { color: "inherit" }
                  : {
                      color: "#e0e0e0",
                      pointerEvents: "none"
                    }
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Recommended;
