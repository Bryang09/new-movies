import React, { Component } from "react";

import "./Cast.scss";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Cast extends Component {
  state = {
    // max: 4,
    max: window.innerWidth < 995 ? 2 : 3,
    min: 0
  };

  onArrowRight = () => {
    this.setState(
      window.innerWidth < 995
        ? { max: this.state.max + 3, min: this.state.min + 3 }
        : { max: this.state.max + 4, min: this.state.min + 4 }
    );
  };
  onArrowLeft = () => {
    this.setState(
      window.innerWidth < 995
        ? { max: this.state.max - 3, min: this.state.min - 3 }
        : { max: this.state.max - 4, min: this.state.min - 4 }
    );
  };
  render() {
    const { cast } = this.props.cast;
    const { min, max } = this.state;
    console.log(max);

    console.log(window.innerWidth);
    console.log(window.innerWidth < 768);

    const mapCast = cast
      .filter((res, i) => i >= min && i <= max)
      .map((res, i) => {
        // RETURN INDEX 0 - 2
        return (
          <div className="castMember" key={i}>
            <Link to={`/actor/1/${res.id}`}>
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
            </Link>

            <h5>{res.name}</h5>
            <h6>{`${res.character}`}</h6>
          </div>
        );
      });

    console.log(cast);

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
