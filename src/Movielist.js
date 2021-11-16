import * as React from 'react';
import { Movie } from './Movie';



export function Movielist({ movies }) {
    console.log("c",movies);
  return (
    
    <div className="movie-list">
        
      {movies.map(({ name, poster, rating, summary }) =>(
        <Movie
          name={name}
          poster={poster}
          rating={rating}
          summary={summary} />
      ))}
    </div>);
}
