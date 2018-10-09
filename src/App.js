import React, { Component} from 'react';
import './App.css';


import { Route, Switch, Redirect } from 'react-router-dom'
import OrderHoney from "./components/scenes/OrderHoney/OrderHoney";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Bee Keeper in Swieradów zdrój</h1>
        <main className="container">
          <Switch>
              <Route path="/orderHoney" component={OrderHoney}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
