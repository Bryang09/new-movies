import React from "react";

import { Link } from "react-router-dom";

const Result = props => {
  const { results, type } = props;

  const result = results.map((res, i) => {
    return (
      <Link to={`/${type}/${res.id}`} key={i}>
        <div
          className="result"
          style={
            res.poster_path !== null
              ? {
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
                    res.poster_path
                  })`
                }
              : { backgroundColor: "rgba(0,0,0,0.8)" }
          }
        >
          <div className="text">
            <h3>{type === "tv" ? res.name : res.title}</h3>
            <h4>{res.overview.substr(0, 100)}...</h4>
          </div>
        </div>
      </Link>
    );
  });

  return result;
};

export default Result;
