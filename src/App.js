import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MintPage from './pages/mint';
import BurnBootPage from './pages/bootlegs';
import Navbar from './componets/Navbar';
import Home from './pages';
import Sidebar from './componets/Sidebar';




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
