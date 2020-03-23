import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CollectData from './components/pages/CollectData';


import { Provider } from 'react-redux'
import store from './store'

import ControlPanel from './components/pages/ControlPanel/ControlPanel';

function App() {

  return (
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/collect">Collect Data</Link>
            </li>
            <li>
              <Link to="/controlpanel">Control Panel</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/collect">
            <CollectData />
          </Route>
          <Route path="/controlpanel">
            <ControlPanel />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>
  );
}

export default App;
