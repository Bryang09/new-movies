import React from "react";

import Info from "./Info/Info";

import "./Header.scss";

const Header = props => {
  const { result, type } = props;

  console.log(result);
  return (
    <div className="firstDivider">
      <div className="text">
        <div className="titleAndInfo">
          <div className="title">
            <h1>{type === "tv" ? result.name : result.title}</h1>
            {type === "tv" ? (
              <h5>
                {result.genres[0].name} | {result.first_air_date.substr(0, 4)} |{" "}
                {result.number_of_seasons}
                {result.number_of_seasons > 1 ? " seasons" : " season"}
              </h5>
            ) : (
              <h5>
                {result.genres[0].name} | {result.release_date.substr(0, 4)} |{" "}
                {result.runtime}min
              </h5>
            )}
          </div>
          <Info result={result} />
        </div>

        <div className="Summary">
          <h5>Summary</h5>
          <h4>{result.overview}</h4>
        </div>
      </div>
      <div className="imgContainer">
        <div className="imgSquare">
          <div
            className="img"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
                result.poster_path
              })`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
