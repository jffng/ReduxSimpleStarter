import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. Should produce html
const App = () => {
  return <div>Hi!</div>;
}

// Take the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
