import React from 'react';
import { movies } from '../data';

const Movies = () => {
  debugger
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return(
        <div>
          <h1>Title: {movie.title}</h1>
          <p>Time: {movie.time}</p>
          <li>
            {movie.genres.map((genre) => {
              return (
                <ul>{genre}</ul>
              )
            })}
          </li>
        </div>
      )})}
    </div>
  );
};

export default Movies;
