import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CollectData from './components/pages/CollectData/CollectData';


import { DndProvider } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend'
import Backend from 'react-dnd-html5-backend';
import { Provider } from 'react-redux'
import store from './store'

import ControlPanel from './components/pages/ControlPanel/ControlPanel';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';

function App() {
  const isMobile = window.outerWidth <= 1204;
  const backend = isMobile ? TouchBackend : Backend;
  return (
  <Provider store={store}>
  <DndProvider backend={backend}>
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
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
      </div>
    </Router>
  </DndProvider>
  </Provider>
  );
}

export default App;
