import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dashboardApp from "./reducers";

import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import './App.css';

let store = createStore(dashboardApp, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route component={NotFound}/>
        </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
