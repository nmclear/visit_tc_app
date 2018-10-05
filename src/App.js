/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import reducers from './reducers';
import Router from './Router';

import { Header } from './components/common';

// const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
// <Provider store={store}></Provider>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider>
        <Router />
      </Provider>
    );
  }
}

export default App;
