import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//higher order component
export function AddMovie({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addmovie = () => {
    console.log("adding.....", name, rating, poster, summary,trailer);
    const newmovie = {
      name, poster, rating, summary,trailer
    };
    console.log("a", movies);

    console.log("b", newmovie);
    setMovies([...movies, newmovie]);
    console.log("setmoviesadd",setMovies)
  };
  //copied the movielist and add new movie
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
      <Button variant="outlined" onClick={addmovie}>Add movie</Button>

    </div>
  );
}
