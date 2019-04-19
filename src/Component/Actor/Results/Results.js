import React from "react";

import { Link } from "react-router-dom";

const Result = props => {
  const { results, type, movieNumber, tvNumber, tv, movies, categorie } = props;

  console.log(props);

  const result = results
    .sort((a, b) => b.popularity - a.popularity)
    .map((res, i) => {
      return (
        <Link to={`/credit/actor/${res.credit_id}`} key={i}>
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
              <h3>{categorie === "tv" ? res.name : res.title}</h3>
              <h4>{res.overview.substr(0, 100)}...</h4>
            </div>
          </div>
        </Link>
      );
    });

  console.log(type);
  console.log(results);
  return (
    <div className="results" style={{ width: "100%", flexDirection: "column" }}>
      {" "}
      <div
        className="buttons"
        style={
          movieNumber > tvNumber
            ? { flexDirection: "row" }
            : { flexDirection: "row-reverse" }
        }
      >
        <h5
          className={categorie === "movie" ? "activeCategorie" : null}
          onClick={movies}
        >
          Movies ({movieNumber})
        </h5>
        <h5
          className={categorie === "tv" ? "activeCategorie" : null}
          onClick={tv}
        >
          TV ({tvNumber})
        </h5>
      </div>
      <div className="resultContainer">{result}</div>
    </div>
  );
};

export default Result;
