import React from "react";

const Header = props => {
  const { details, back } = props;
  return (
    <div className="firstDivider">
      <div className="text">
        <div className="titleAndInfo">
          <div className="title">
            <h4 onClick={back} style={{ cursor: "pointer" }}>
              Return
            </h4>
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
          <h4>{details.biography}</h4>
        </div>
      </div>
      <div className="imgContainer">
        <div
          className="imgSquare"
          style={{ background: "linear-gradient(#5b90ff, #fff)" }}
        >
          <div
            className="img"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
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
