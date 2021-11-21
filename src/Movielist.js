import * as React from 'react';
import { Movie } from './Movie';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router';



export function Movielist({ movies ,setMovies}) {
  const history=useHistory();
  console.log("setmovies",setMovies)
    console.log("c",movies);
  return (
    
    <div className="movie-list">
        
      {movies.map(({ name, poster, rating, summary },index) =>(
        <Movie
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          id={index} 
          //we are printing movelist  which doesnot match the same index and setting in setMovies
          deletebutton={
          
          <IconButton onClick={()=>{
            console.log("deleting...",index);
            const deleteIdex=index;
            const remainingmovies=movies.filter(
              (a,idx)=>idx!==deleteIdex);
            console.log("remaining",remainingmovies);
            console.log(setMovies)
            setMovies(remainingmovies);
          }}
          className="deletebutton"
          color="error"
          aria-label="delete">
          <DeleteIcon/>
          </IconButton>}

          editbutton={
           <IconButton onClick={()=>history.push("/movies/edit/"+index) }
           className="editbutton"
           color="primary"
           aria-label="edit">
           <EditIcon/>
           </IconButton>}/>
          
      ))} 
    </div>);
}
