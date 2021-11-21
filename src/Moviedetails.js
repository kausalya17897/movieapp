import * as React from 'react';
import { useParams } from "react-router-dom";

export function Moviedetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  const styles = { color: movie.rating > 8 ? "green" : "red", fontWeight: "bold" };
  console.log(movie);
  // to extract content useParams is used 
  return (
    <div className="movie-detail-container">
      <iframe width="100%"
        height="540"
        src={movie.trailer}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

      </iframe>
      <div className="movie-spec">

        <h3 className="movie-name">{movie.name}</h3>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>

      <p className="movie-summary">{movie.summary}</p>

    </div>

  );
}
