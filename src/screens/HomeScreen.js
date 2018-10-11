import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timeOfDaySetUp } from '../actions';
import HomeIconBar from '../components/HomeIconBar';
import MapIconBar from '../components/MapIconBar';
import GreetingCard from '../components/GreetingCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { greetingDisplay: 'flex', mapBarDisplay: 'none' };
    this.renderIcons = this.props.timeOfDaySetUp();
  }

  onGreetingOpen = () => this.setState({ greetingDisplay: 'flex', mapBarDisplay: 'none' });

  onGreetingClose = () => this.setState({ greetingDisplay: 'none', mapBarDisplay: 'flex' });

  render() {
    const { greetingDisplay, mapBarDisplay } = this.state;
    const { container } = styles;

    const { icons, text } = this.props;
    return (
      <View style={container}>
        <HomeIconBar />
        <MapIconBar showGreeting={this.onGreetingOpen} visible={mapBarDisplay} />
        <GreetingCard visible={greetingDisplay} onClose={this.onGreetingClose} icons={icons}>
          {text}
        </GreetingCard>
      </View>
    );
  }
}

const mapStateToProps = ({ greeting }) => {
  const { icons, text } = greeting;
  return {
    icons,
    text,
  };
};

HomeScreen.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
  text: PropTypes.string.isRequired,
  timeOfDaySetUp: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { timeOfDaySetUp },
)(HomeScreen);
