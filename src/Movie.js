import { useState } from 'react';
import * as React from 'react';
import { Counter } from './Counter.1';

export function Movie({ name, poster, rating, summary }) {
  const [show, setShow] = useState(true);
  const styles = { color: rating > 8 ? "green" : "red", fontWeight: "bold" };
  const summarystyles = { display: show ? "block" : "none" };
  return (


    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <div className="movie-spec">

        <h3 className="movie-name">Name:{name}</h3>
        <p style={styles} className="movie-rating">⭐{rating}</p>
      </div>
      <button onClick={() => setShow(!show)} className="show-hide">Hide description</button>
      <p style={summarystyles} className="movie-summary">{summary}</p>
      <Counter />
    </div>




  );
}
