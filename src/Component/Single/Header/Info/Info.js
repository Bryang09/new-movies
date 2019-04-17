import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Info = props => {
  const { result } = props;

  return (
    <div className="info">
      {/* #ff4242 */}
      {/* #ff9090 */}
      <div className="rating">
        <FontAwesomeIcon
          icon="star"
          size="2x"
          color={Math.ceil(result.vote_average) > 2 ? "#ff4242" : "#ff9090 "}
        />
        <FontAwesomeIcon
          icon="star"
          size="2x"
          color={Math.ceil(result.vote_average) > 4 ? "#ff4242" : "#ff9090 "}
        />
        <FontAwesomeIcon
          icon="star"
          size="2x"
          color={Math.ceil(result.vote_average) > 6 ? "#ff4242" : "#ff9090 "}
        />
        <FontAwesomeIcon
          icon="star"
          size="2x"
          color={Math.ceil(result.vote_average) > 8 ? "#ff4242" : "#ff9090 "}
        />
        <FontAwesomeIcon
          icon="star"
          size="2x"
          color={Math.ceil(result.vote_average) >= 10 ? "#ff4242" : "#ff9090 "}
        />
      </div>
    </div>
  );
};

export default Info;
