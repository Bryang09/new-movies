import React from "react";

import "./Header.scss";

const Header = props => {
  const { details, back } = props;
  console.log(details);
  return (
    <div className="firstDivider divider">
      <div className="text">
        <div className="titleAndInfo">
          <div className="title">
            <div>
              <h4 onClick={back} style={{ cursor: "pointer", width: 0 }}>
                Return
              </h4>
            </div>

            <h1>{details.name}</h1>
            <h5>
              {details.gender === 2 ? "Male" : "Female"} |{" "}
              {details.birthday !== null
                ? details.birthday.substr(0, 4)
                : "n/a"}{" "}
              | {details.place_of_birth}
            </h5>
          </div>
        </div>

        <div className="Summary">
          <h5>About</h5>
          <h4 style={{ color: "#b5b5b5" }}>{details.biography}</h4>
        </div>
      </div>
      <div className="imgContainer">
        <div className="imgSquare square">
          <div
            className="img"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w780/${
                details.profile_path
              })`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
