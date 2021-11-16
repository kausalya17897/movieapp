import * as React from 'react';
import {Msg} from './Msg.js';

export function Movielist({movies}) {
  return (
    <div className="movielist">
      {movies.map(({ name, poster, rating, summary }) => (
        <Msg
          name={name} poster={poster} rating={rating} summary={summary} />
      ))}
    </div>
  );
}
