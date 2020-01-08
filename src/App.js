import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import PropTypes from "prop-types";
import "./App.css";

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies); 이걸 아래처럼 할 수 있음
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({
      movies,
      isLoading: false
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading ...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id} // list에는 key값이 필요
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
