import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from "react-router-dom";
//higher order component
export function Editmovie({ movies, setMovies }) {
  const { id } = useParams();
  const movie = movies[id];
  console.log(id,movie);
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const editmovie = () => {
    console.log("updating.....", name, rating, poster, summary,trailer);
    
    const updatedmovie = {
      name, poster, rating, summary,trailer
    };
const copymovielist=[...movies];
copymovielist[id]=updatedmovie;
    console.log("b", updatedmovie);
    setMovies(copymovielist);
    console.log("updatedmovies",setMovies)
  };
  //replace the updatedmovie
  return (
    <div className="addmoviedata">
      <TextField id="standard-basic" variant="standard" value={name} type="text"
        onChange={(event) => setName(event.target.value)}
        placeholder="enter movie name" />
      <TextField id="standard-basic" variant="standard" value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="enter movie url" />

      <TextField id="standard-basic" variant="standard" value={rating} onChange={(event) => setRating(event.target.value)}
        placeholder="enter rating" />
      <TextField id="standard-basic" variant="standard" value={summary} onChange={(event) => setSummary(event.target.value)}
        placeholder="enter movie summary" />
        <TextField id="standard-basic" variant="standard" value={trailer} onChange={(event) => setTrailer(event.target.value)}
        placeholder="enter movie trailer" />
      <Button variant="outlined" onClick={editmovie}>update movie</Button>

    </div>
  );
}
