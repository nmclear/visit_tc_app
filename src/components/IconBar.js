import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import {} from '../actions';
import IconLabelBtn from './IconLabelBtn';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flex: 1,
  },
});

class IconBar extends Component {
  onButtonPress = (select) => {
    const {} = this.props;
  };

  renderIcons = () => {
    const { icons } = this.props;
    return icons.map(icon => (
      <IconLabelBtn
        key={icon.label}
        name={icon.name}
        color="#FDD017"
        size={25}
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

IconBar.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default IconBar;
