import * as React from 'react';
import { useParams,useHistory } from "react-router-dom";
import { useEffect,useState } from 'react';

export function Moviedetails({ movies }) {
  const history=useHistory();
  const { id } = useParams();
  
  
  const[movie,setMovie]=useState({});
useEffect(()=>{
  fetch(`https://61681515ba841a001727c589.mockapi.io/movie/${id}`,{
    method:"GET",
  })
  .then((data)=>data.json())
  .then((mvs)=>setMovie(mvs))
},[]);
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
