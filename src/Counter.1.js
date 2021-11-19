import { useState } from 'react';
import * as React from 'react';
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge';


export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (
    <div className="counter-container">
      
      <IconButton aria-label="delete"
      className="like-dislike" 
      color="primary"
      onClick={() => setLike(like + 1)}>
        <Badge badgeContent={like} color="primary">
  👍
</Badge>
  </IconButton>
  
  <IconButton aria-label="delete"
      className="like-dislike" 
      color="error"
      onClick={() => setdisLike(dislike + 1)}>
        <Badge badgeContent={dislike} color="error">
        👎
        </Badge>
  </IconButton>
    
    </div>
  );
}
