import React, { Component } from "react";

import "./Cast.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Cast extends Component {
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
    const { cast } = this.props.cast;
    const { min, max } = this.state;

    const mapCast = cast
      .filter((res, i) => i >= min && i < max)
      .map((res, i) => {
        return (
          <div className="castMember" key={i}>
            <div
              className="img"
              style={
                res.profile_path !== null
                  ? {
                      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
                        res.profile_path
                      })`
                    }
                  : { backgroundColor: "#eee" }
              }
            />
            <h5>{res.name}</h5>
            <h6>"{`${res.character}`}"</h6>
          </div>
        );
      });

    console.log(cast.length);
    console.log(cast);
    console.log(min, max);
    console.log(mapCast);
    return (
      <div className="Cast">
        <h4>The Cast</h4>

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

          {mapCast}
          <div className="rightArrow">
            <FontAwesomeIcon
              icon="arrow-right"
              size="2x"
              color="#3c3c3c"
              onClick={this.onArrowRight}
              style={
                max < cast.length - 1
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

export default Cast;

// HAVE A COUNTER FOR INDEX
// FILTER BY INDEX
// WHEN ARROW CLICKED, BRING NEXT INDEXES
