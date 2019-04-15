import React from "react";

const Movie = props => {
  return (
    <div
      className={movieFull ? "option movie full" : "option movie"}
      onMouseEnter={onMovieHover}
      onMouseLeave={onMovieLeave}
    >
      <div className="optionText">
        <h2>Search For Movies</h2>

        <div className="buttons">
          <div
            className={
              search ? "option discover noDiscover" : "option discover"
            }
          >
            <Link to="/movies">
              <h5>Discover</h5>
            </Link>
          </div>
          <div
            className={search ? "option search searchActive" : "option search"}
            onClick={onSearchClick}
          >
            <h5>Search</h5>
          </div>
        </div>

        <div className="searchBar">
          <form onChange={onMovieSearch}>
            <input type="text" placeholder="Type Name of Movie" />
          </form>

          <h6>{movieSearch}</h6>
        </div>
      </div>
    </div>
  );
};

export default Movie;
