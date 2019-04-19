import React from "react";

import Pagination from "../Pagination/Pagination";
import Result from "../Results/Result";
import TaskBar from "../TaskBar/TaskBar";

const Display = props => {
  const {
    type,
    categorie,
    results,
    resultType,
    totalPages,
    onForward,
    onBackward,
    page
  } = props;
  console.log(props.genres);

  return (
    <div className="Discover">
      <TaskBar type={type} categorie={categorie} />
      <div className="results">
        <div className="resultContainer">
          <Result results={results} type={resultType} />

          <Pagination
            results={totalPages}
            onForward={onForward}
            onBackward={onBackward}
            page={page}
          />
        </div>
      </div>
    </div>
  );
};

export default Display;
