import React from "react";

import { Link } from "react-router-dom";

const Text = props => {
  const {
    Full,
    search,
    ifSearch,
    onHover,
    onLeave,
    onSearchClick,
    onSearch,
    title,
    categorie,
    link,
    placeholder
  } = props;

  return (
    <div
      className={Full ? `option ${categorie} full` : `option ${categorie}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="optionText">
        <h2>{title}</h2>

        <div
          className="buttons"
          style={Full ? { display: "flex" } : { display: "none" }}
        >
          <div
            className={
              ifSearch ? "option discover noDiscover" : "option discover"
            }
          >
            <Link to={`/${link}`}>
              <h5>Discover</h5>
            </Link>
          </div>
          <div
            className={
              ifSearch ? "option search searchActive" : "option search"
            }
            onClick={onSearchClick}
          >
            <h5>Search</h5>
          </div>
        </div>

        <div
          className="searchBar"
          style={ifSearch ? { display: "flex" } : { display: "none" }}
        >
          <form onChange={onSearch}>
            <input type="text" placeholder={`${placeholder}`} />
          </form>

          <h6>{search}</h6>
        </div>
      </div>
    </div>
  );
};

export default Text;