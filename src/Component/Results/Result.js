import React from "react";

import { Link } from "react-router-dom";

const Result = props => {
  const { results, type } = props;

  const result = results.map((res, i) => {
    return (
      <Link to={`/${type}/${res.id}`} key={i}>
        <div
          className="result"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
              res.poster_path
            })`
          }}
        >
          <div className="text">
            <h3>{res.title}</h3>
            <h4>{res.overview.substr(0, 100)}...</h4>
          </div>
        </div>
      </Link>
    );
  });

  console.log(results);
  return result;
};

export default Result;
