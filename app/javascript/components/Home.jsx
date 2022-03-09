import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h1>Battlegrid</h1>
    <Link to="/play" role="button">Play</Link>
    <Link to="/collection" role="button">Collection</Link>
  </div>
);
