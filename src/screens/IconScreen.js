import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IconLabelBtn from '../components/IconLabelBtn';

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

class IconScreen extends Component {
  renderIcons = () => {
    const { icons, color } = this.props;
    return icons.map(icon => (
      <View style={{ width: '33.333333%' }} key={icon.label}>
        <IconLabelBtn
          name={icon.name}
          color={color}
          size={40}
          onPress={icon.onPress}
          label={icon.label}
        />
      </View>
    ));
  };

  render() {
    const { containerStyle } = styles;
    return <View style={containerStyle}>{this.renderIcons()}</View>;
  }
}

const mapStateToProps = ({ home }) => {
  const { icons, color } = home;
  return {
    icons,
    color,
  };
};

IconScreen.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  {},
)(IconScreen);
