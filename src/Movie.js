import React, { Component } from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <div className="movie__poster">
        <img
          src={poster}
          className="movie__poster"
          alt={title}
          title={title}
        ></img>
      </div>
      <div className="movie__data">
        <h4 className="movie__title">{title}</h4>
        <h5 className="movie__year">made in {year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => {
            return <li key={index}>{genre}</li>;
          })}
        </ul>
        <p className="movie__summary">{summary.slice(0, 150)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
