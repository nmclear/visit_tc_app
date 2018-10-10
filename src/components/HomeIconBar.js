import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
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

class HomeIconBar extends Component {
  onButtonPress = (select) => {
    const {
      exploreSelected, restaurantSelected, hotelSelected, moreSelected,
    } = this.props;
    if (select === 'explore') {
      exploreSelected('explore');
    } else if (select === 'restaurant') {
      restaurantSelected('restaurant');
    } else if (select === 'hotel') {
      hotelSelected('hotel');
    } else if (select === 'more') {
      moreSelected('more');
    }
  };

  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <IconBtn
          name="silverware-fork-knife"
          color="#616D7E"
          size={25}
          onPress={this.onButtonPress.bind(this, 'restaurant')}
        />
        <IconBtn
          name="hotel"
          color="#616D7E"
          size={25}
          onPress={this.onButtonPress.bind(this, 'hotel')}
        />
        <IconBtn
          name="binoculars"
          color="#616D7E"
          size={25}
          onPress={this.onButtonPress.bind(this, 'explore')}
        />
        <IconBtn
          name="dots-horizontal"
          color="#616D7E"
          size={25}
          onPress={this.onButtonPress.bind(this, 'more')}
        />
      </View>
    );
  }
}

// export default HomeIconBar;

const mapStateToProps = ({ home }) => {
  const { selected, icons, loading } = home;

  return {
    selected,
    icons,
    loading,
  };
};

HomeIconBar.propTypes = {
  exploreSelected: PropTypes.func.isRequired,
  restaurantSelected: PropTypes.func.isRequired,
  hotelSelected: PropTypes.func.isRequired,
  moreSelected: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  {
    exploreSelected,
    restaurantSelected,
    hotelSelected,
    moreSelected,
  },
)(HomeIconBar);
