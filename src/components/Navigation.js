import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <a><Link to="/">Home</Link></a>
        </div>
        <div>
          <a><Link to="/about">About</Link></a>
        </div>
        <div>
          <a><Link to="/contact">Contact</Link></a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
