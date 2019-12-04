import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from './store';
import * as projectAction from './store/actions/projectActions';

import Nav from './components/nav';
import Body from './components/body';

function App() {
  useEffect(() => {
    try {
      window.addEventListener('load', () => {
        store.dispatch(projectAction.getData());
      });
    } catch (error) {
      alert(`Failed to load web3, accounts, or contract. Check console for details.`);
      console.error(error);
    }
  }, []);

  return (
    <div className='App'>
      <Nav />
      <Body />
    </div>
  );
}

export default App;
