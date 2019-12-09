import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import store from './store';
import * as projectAction from './store/actions/projectActions';

import Nav from './components/nav';
import Body from './components/body';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RealtimeGraph from './components/realtimeGraph';
import ColumnPage from './components/columnPage';

function App() {
  useEffect(() => {
    try {
      window.addEventListener('load', () => {
        store.dispatch(projectAction.getData());
      });
    } catch (error) {
      alert(`Failed load details.`);
      console.error(error);
    }
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/' component={Body} />
          <Route exact path='/showRealtime' component={RealtimeGraph} />
          <Route exact path='/showChar' component={ColumnPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
