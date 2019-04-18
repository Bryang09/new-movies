import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Pagination.scss";
const Pagination = props => {
  const { page, results, onForward, onBackward } = props;

  return (
    <div className="Pagination">
      <div className="paginationContainer">
        <span className="backArrow">
          <FontAwesomeIcon
            icon="arrow-left"
            size="2x"
            onClick={onBackward}
            style={
              page === "1"
                ? { pointerEvents: "none", color: "gray" }
                : { cursor: "pointer" }
            }
          />
        </span>
        <div className="paginationOptions">
          <h3>{page}</h3>
        </div>
        <span
          className="forwardArrow"
          style={page < results ? { display: "flex" } : { display: "none" }}
        >
          <FontAwesomeIcon icon="arrow-right" size="2x" onClick={onForward} />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
