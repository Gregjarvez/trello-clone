import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Logo from './logo.3c0d526e.svg';
import Home from './Component/Home';
import TrelloBoard from './Component/TrelloBoard'
import './App.css';

import BoardStore from './store/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={Logo} alt="" />
        <Provider store={BoardStore}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/b/:id" component={TrelloBoard} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
