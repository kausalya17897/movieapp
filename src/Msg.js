import {useState} from "react";
import {Counter} from "./Counter.js";
  export default function Msg({name,poster,rating,summary}) {
    const [show,setShow]=useState(true);
    //styling
    const styles={color:rating<8?"red":"green",fontWeight:"bold"};
    const summarystyles={display:show?"block":"none"};
    //const name = "kausi";
    return (
      <div className="container">
        <img  className="user-pic" src={poster} alt={name}/>
        <div className="content">
        <div className="user-name"><h1 className="big">Movie:{name}</h1>
        <p className="big"  style={styles}>⭐{rating}</p>
        </div></div>
        <button onClick={()=>{setShow(!show)}} className="hide" >Hide description</button>
        <div style= {summarystyles} className="user-summary">
        {summary}</div>
      <Counter/>  
      
    </div>
  )
}
export{Msg}

