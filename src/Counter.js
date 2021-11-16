import { useState } from "react";
export  function Counter(){
    const[like,setLike]=useState(0);
    const[dislike,setdisLike]=useState(0);
    return(
      <div className="livecounter">
      <button className="livebutton" onClick={()=>{
        
        setLike(like+1);
       
        }}>👍{like}</button>
        
        <button className="livebutton" onClick={()=>{
        
        setdisLike(dislike+1);
       
        }}>👎{dislike}</button>
        
    </div>
    );
  }
  