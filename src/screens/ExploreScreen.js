import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import IconLabelBtn from '../components/IconLabelBtn';
import { exploreIcons } from './screensData/exploreIcons';

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
});

class ExploreScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageIcons: exploreIcons,
    };
  }

  renderIcons = () => {
    const { pageIcons } = this.state;
    return pageIcons.map(icon => (
      <IconLabelBtn
        key={icon.label}
        name={icon.name}
        color="#82CAFF"
        size={40}
        onPress={icon.onPress}
        label={icon.label}
      />
    ));
  };

  render() {
    const { containerStyle } = styles;
    return <View style={containerStyle}>{this.renderIcons()}</View>;
  }
}

export default ExploreScreen;
