import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logo from './logo.3c0d526e.svg';
import Home from './Component/Home';
import TrelloBoard from './Component/TrelloBoard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={Logo} alt="" />
          <BrowserRouter>
            <Switch>
              <Route to="/" component={Home} />
              <Route to="/b/:id" component={TrelloBoard} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
