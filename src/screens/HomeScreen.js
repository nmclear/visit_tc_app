import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HomeIconBar from '../components/HomeIconBar';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <HomeIconBar />
      </View>
    );
  }
}

export default HomeScreen;
