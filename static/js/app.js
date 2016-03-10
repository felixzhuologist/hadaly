import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './components/TopNav'

function Home() {
  return (
    <div>
      <p> HELLOOOO </p>
    </div>
  )
};

ReactDOM.render(<TopNav />, document.querySelector('.container'));