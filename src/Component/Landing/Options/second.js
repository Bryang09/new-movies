import React from "react";

import { Link } from "react-router-dom";

const Second = props => {
  const { optionNumber, movie, tv, categorie } = props;
  return (
    <div
      className={
        optionNumber === 2
          ? "options  secondOptions activeOption"
          : "options secondOptions notActive"
      }
    >
      <Link to={`/${categorie}/discover/1/popular`}>
        <h3>Discover</h3>
      </Link>
      {categorie === "tv" ? (
        <h3 onClick={tv}>Search</h3>
      ) : (
        <h3 onClick={movie}>Search</h3>
      )}
    </div>
  );
};

export default Second;
