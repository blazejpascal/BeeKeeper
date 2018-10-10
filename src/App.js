import React, { Component} from 'react';
import './App.css';


import { Route, Switch, Redirect } from 'react-router-dom'
import OrderHoney from "./components/scenes/OrderHoney/OrderHoney";
import AboutUs from './components/scenes/AboutUs/AboutUs'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route path="/aboutUs" component={AboutUs}/>
              <Route path="/orderHoney" component={OrderHoney}/>
              <Redirect from="/" exact to="/aboutUs"/>
          </Switch>
      </div>
    );
  }
}

export default App;
