import React, { Component} from 'react';
import './App.css';


import { Route, Switch, Redirect } from 'react-router-dom'

import AboutUs from './components/scenes/AboutUs/AboutUs'
import BeeCamera from "./components/scenes/BeeCamera/BeeCamera";
import Contact from "./components/scenes/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route path="/aboutUs" component={AboutUs}/>
              <Route path="/beeCamera" component={BeeCamera}/>
              <Route path="/contacts" component={Contact}/>
              <Redirect from="/" exact to="/aboutUs"/>
          </Switch>
      </div>
    );
  }
}

export default App;
