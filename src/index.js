import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <>
      <StarRating color='blue' maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['terrible', 'not good', 'good', 'excellent', 'amazing']}
    /> */}
    {/* <StarRating size={24} color='red' defaultRating={2} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
