import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  exploreSelected, restaurantSelected, hotelSelected, moreSelected,
} from '../actions';
import IconBtn from './IconBtn';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

const HomeIconBar = (props) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <IconBtn
        name="silverware-fork-knife"
        color="#616D7E"
        size={25}
        onPress={() => props.restaurantSelected()}
      />
      <IconBtn name="hotel" color="#616D7E" size={25} onPress={() => props.hotelSelected()} />
      <IconBtn
        name="binoculars"
        color="#616D7E"
        size={25}
        onPress={() => props.exploreSelected()}
      />
      <IconBtn
        name="dots-horizontal"
        color="#616D7E"
        size={25}
        onPress={() => props.moreSelected()}
      />
    </View>
  );
};

HomeIconBar.propTypes = {
  exploreSelected: PropTypes.func.isRequired,
  restaurantSelected: PropTypes.func.isRequired,
  hotelSelected: PropTypes.func.isRequired,
  moreSelected: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    exploreSelected,
    restaurantSelected,
    hotelSelected,
    moreSelected,
  },
)(HomeIconBar);
