import React from "react";

const First = props => {
  const { optionNumber, movie, tv } = props;
  return (
    <div
      className={
        optionNumber === 1
          ? "options firstOptions activeOption"
          : "options firstOptions notActive"
      }
    >
      <h3 onClick={movie}>Movies</h3>
      <h3 onClick={tv}>TV Shows</h3>
    </div>
  );
};

export default First;
