import React from "react";

import { Link } from "react-router-dom";

const Third = props => {
  const { optionNumber, movie, tv, categorie, input, search } = props;
  return (
    <div
      className={
        optionNumber === 3
          ? "options  secondOptions activeOption"
          : "options secondOptions notActive"
      }
    >
      <form onChange={input}>
        <input
          type="text"
          placeholder={
            categorie === "tv" ? "Type TV Show Name" : "Type Movie Name"
          }
        />

        <Link
          to={
            categorie === "movies"
              ? `/search/movie/1/${search}`
              : `/search/${categorie}/1/${search}`
          }
        >
          {search.length > 0 ? (
            <button type="submit" style={{ display: "none" }} />
          ) : (
            <button type={"submit"} disabled style={{ display: "none" }} />
          )}
        </Link>
      </form>
    </div>
  );
};

export default Third;
