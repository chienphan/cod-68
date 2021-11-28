import React from 'react';
import ReactDOM from 'react-dom';

const tick = () => {
ReactDOM.render(
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
