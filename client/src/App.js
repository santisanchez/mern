import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Routify} from './routes/MainRoutes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CollectData from './components/pages/CollectData/CollectData';


function App() {

  const [team,setTeam] = useState([])

  useEffect(()=>{
    // console.log(Routify('getTeamById',1,2))
  },[])

  return (
    <Router>
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/collect">Collect Data</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/collect">
            <CollectData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
