import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
// import { Actions } from 'react-native-router-flux';
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

class RestaurantScreen extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     // pageIcons: exploreIcons,
  //   };
  // }

  renderIcons = () => {
    // const { pageIcons } = this.state;

    const { icons } = this.props;
    return icons.map(icon => (
      <View style={{ width: '33.333333%' }} key={icon.label}>
        <IconLabelBtn
          name={icon.name}
          color="#5E7D7E"
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
  const { selected, icons, loading } = home;

  return {
    selected,
    icons,
    loading,
  };
};

RestaurantScreen.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
  {},
)(RestaurantScreen);
