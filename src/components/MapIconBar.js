import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {} from '../actions';
import IconBtn from './IconBtn';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

class MapIconBar extends Component {
  onButtonPress = (select) => {
    const { loading } = this.props;
  };

  render() {
    const { containerStyle } = styles;
    const { showGreeting, visible } = this.props;
    return (
      <View style={[containerStyle, { display: visible }]}>
        <IconBtn
          name="information-variant"
          color="#616D7E"
          size={25}
          onPress={this.onButtonPress.bind(this, 'info')}
        />
        <IconBtn name="map-marker" color="#616D7E" size={25} onPress={showGreeting.bind(this)} />
        <IconBtn
          name="crosshairs-gps"
          color="#616D7E"
          size={25}
          onPress={this.onButtonPress.bind(this, 'location')}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ home }) => {
  const { icons, loading } = home;

  return {
    icons,
    loading,
  };
};

MapIconBar.propTypes = {
  showGreeting: PropTypes.func.isRequired,
  visible: PropTypes.string,
};

MapIconBar.defaultProps = {
  visible: 'flex',
};

export default connect(
  mapStateToProps,
  {},
)(MapIconBar);
