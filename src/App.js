import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MintPage from './pages/mint';
import BurnBootPage from './pages/burnmechanicsBoot';
import Home from './pages';




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/mint" component={MintPage} exact />
        <Route path="/bootlegs" component={BurnBootPage} exact />
      </Switch>
    </Router> 
  ); 
}

export default App;
