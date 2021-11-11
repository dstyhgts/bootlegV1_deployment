import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MintPage from './pages/mint';
import Navbar from './componets/Navbar';
import Home from './pages/index';
import Sidebar from './componets/Sidebar';




function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/mint" component={MintPage} exact />
      </Switch>
    </Router> 
  ); 
}

export default App;
