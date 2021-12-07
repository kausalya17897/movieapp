import './App.css';
import * as React from 'react';
import { Movielist } from './Movielist';
import { useState } from 'react';
import{Switch,Route,Redirect} from "react-router-dom";
import { AddMovie } from './AddMovie';
import { Editmovie } from './Editmovie';
import { Moviedetails } from './Moviedetails';
import { Notfound } from './Notfound';
import { Welcome } from './Welcome';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {useHistory} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function App() {
  // eslint-disable-next-line
 //name:"",poster:"",rating:"",summary:""
  const initialmovies=[
{id:"100",
name:"Finding Nemo",
poster:"https://lumiere-a.akamaihd.net/v1/images/pp_findingnemo_herobannermobile_19752_7810e507.jpeg?region=0,0,640,480",
rating:"10",
summary:"Finding Nemo is a 2003 American computer-animated adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures.",
trailer:"https://www.youtube.com/embed/2zLkasScy7A?list=TLPQMjAxMTIwMjF0W5QeqdyCyA"},
    {id:"101",
    name:"Alice in Wonderland",
     poster: "https://i.pinimg.com/originals/c5/af/d0/c5afd03996fc8a4c20ea5ab110c93a65.jpg",
     rating:"8",
     summary:"Alice in Wonderland is a 2010 American dark fantasy film directed by Tim Burton from a screenplay written by Linda Woolverton. The film stars Johnny Depp, ..",
    trailer:"https://www.youtube.com/embed/9POCgSRVvf0"},
    {id:"102",
    name:"Frozen",
    poster:"https://i.ytimg.com/vi/MdIDq6o4i-Y/movieposter_en.jpg",
    rating:"9",
    summary:"Frozen is a 2013 American computer-animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.",
trailer:"www.youtube.com/embed/Zi4LMpSDccc"},
  
    {id:"103",
    name:"The lion king",
    poster:"https://lumiere-a.akamaihd.net/v1/images/image_359725f2.jpeg?region=0,0,640,480",
    rating:"8",
    summary:" The Lion King ... Disney's film journeys to the African savanna where a future king is born. Simba idolizes his father, King Mufasa, and takes to ..",
    trailer:"https://www.youtube.com/embed/7TavVZMewpY"},
  {id:"104",
  name:"Dumbo",
    poster:"https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/4575/674575-v",
    rating:"9",
    summary:"Dumbo is a 2019 American fantasy period adventure film directed by Tim Burton, with a screenplay by Ehren Kruger. The film is a live-action adaptation and ...",
trailer:"https://www.youtube.com/embed/7NiYVoqBt-8"},
    {id:"105",
    name:"master",
  poster:"https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_FMjpg_UX1000_.jpg",
  rating:"9"
  ,summary:"Troubled alcoholic teacher JD is sent to teach at a juvenile reform school. But when he realises a dangerous criminal is using his students to cover up his crimes, JD sets out to stop him. Strong violence, drug misuse.",
trailer:"https://www.youtube.com/embed/UTiXQcrLlv4"},
  {id:"106",
  name:"aranmanai-3",
  poster:"https://m.media-amazon.com/images/M/MV5BYWIyNTA3MjgtM2QxMS00MDBkLTg2MDMtNmMzNTlmYzU1ZjI1XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  rating:"9",
  summary:"At a remote and mysterious palace, a man falls in love with a woman who's guarded by angry spirits.",
  trailer:"https://www.youtube.com/embed/MRiK4WHaJb8"},
  {id:"107",
  name:"udanpirappe",
  poster:"https://i.ytimg.com/vi/rmgjG_pqMuQ/maxresdefault.jpg",
  rating:"8",
  summary:"A woman tries to establish peace in her family when her husband and her brother have an intense difference of opinion over the efficacy of the justice system.",
  trailer:"https://www.youtube.com/embed/Luhzp1435sI"},
  
  {id:"108",
  name:"lift",
  poster:"https://tamil.samayam.com/photo/msid-86448369,imgsize-127780/pic.jpg",
  rating:"7",
  summary:"A routine working day turns unusual for Guru and Harini when they get trapped in their haunted office. A patterned game unlocks a mystery, and a lift is their only way out.",
 trailer:"https://www.youtube.com/embed/Kj50JODc5Cc"},
  {id:"109",
  name:"Jai Bhim",
  poster:"https://gumlet.assettype.com/swarajya%2F2021-11%2F9dfb808a-4d4d-4e86-adaa-aa7abf1fdd0e%2FMV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5__V1_FMjpg_UX1000_.jpg?q=75&auto=format%2Ccompress&w=1200",
  rating:"8",
  summary:" As for Jai Bhim, it is perhaps one of the boldest films to come out of Tamil cinema. Most of you might confuse its boldness with the film's ...",
trailer:"https://www.youtube.com/embed/UY34eAUxuRk"}
 
]



//const name=["kausi","madhu","prisci"];

const [movies,setMovies]=useState();
const history=useHistory();
const [mode,setMode]=useState("dark")
const theme = createTheme({
  palette: {
    mode: mode,
  },
});
React.useEffect(()=>{
  fetch("https://61681515ba841a001727c589.mockapi.io/movie")
  .then((data)=>data.json())
  .then((mvs)=>setMovies(mvs));
},[]);
return(
  <ThemeProvider theme={theme}>
    <Paper elevation={0} >
  <div className="App">

  <AppBar position="static" style={{marginBottom:"20px"}}>
    <Toolbar variant="dense">
      <Button variant="text"color="inherit" onClick={()=>history.push('/')}>
Home</Button>
<Button variant="text"color="inherit" onClick={()=>history.push("/movies")}>
Movies</Button>
<Button variant="text"color="inherit" onClick={()=>history.push("/Addmovie")}>
Add movies</Button>

<Button  style={{marginLeft:"auto"}}variant="text"color="inherit" onClick={()=>setMode(mode==="light"?"dark":"light")}>
Light mode </Button>
<Button  style={{marginRight:"10px"}}variant="text"color="inherit" onClick={()=>history.push("/signup")}>
Sign up </Button>
  </Toolbar>
  </AppBar>
 
<Switch>
<Route exact path="/">
    <Welcome/>
</Route>
  <Route path="/films">
    <Redirect  to="/movies"/>
    </Route>
    <Route path="/movies/edit/:id"><Editmovie/></Route>
    <Route path="/movies/:id"> <Moviedetails />
  </Route>
  
  <Route path="/movies">
  <Movielist/>
 
  </Route>
  
  <Route path="/AddMovie">
  <AddMovie/>
  </Route>
  
  <Route path="/signup">
  <Signupform/>
  </Route>
  
  <Route path="**">
<Notfound/>
  </Route>
  </Switch>

</div>
</Paper>
</ThemeProvider>
)}

function Signupform(){

  return()
}