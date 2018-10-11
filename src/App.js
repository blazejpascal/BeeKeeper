import React, { Component} from 'react';
import './App.scss';


import { Route, Switch, Redirect } from 'react-router-dom'

import AboutUs from './components/scenes/AboutUs/AboutUs'
import BeeCamera from "./components/scenes/BeeCamera/BeeCamera";
import Contact from "./components/scenes/Contact/Contact";
import BeeKeeper from "./components/scenes/BeeKeeper/BeeKeeper";
import ArtShop from "./components/scenes/ArtShop/ArtShop";
import Furniture from "./components/scenes/Furniture/Furnitures";
import OrderHoney from "./components/scenes/OrderHoney/OrderHoney";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route path="/aboutUs" component={AboutUs}/>
              <Route path="/beeCamera" component={BeeCamera}/>
              <Route path="/contacts" component={Contact}/>
              <Route path="/beeKeeper" component={BeeKeeper}/>
              <Route path="/artShop" component={ArtShop}/>
              <Route path="/furniture" component={Furniture}/>
              <Route path="/orderHoney" component={OrderHoney}/>
              <Redirect from="/" exact to="/aboutUs"/>
          </Switch>
      </div>
    );
  }
}

export default App;
