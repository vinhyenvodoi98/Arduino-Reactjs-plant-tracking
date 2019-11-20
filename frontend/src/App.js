import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from './components/nav';
import Body from './components/body';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Body />
    </div>
  );
}

export default App;
