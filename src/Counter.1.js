import { useState } from 'react';
import * as React from 'react';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (
    <div className="counter-container">
      <button className="like-dislike" onClick={() => setLike(like + 1)}>👍{like}</button>
      <button className="like-dislike" onClick={() => setdisLike(dislike + 1)}> 👎{dislike}</button>
    </div>
  );
}
