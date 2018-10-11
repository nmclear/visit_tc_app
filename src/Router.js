import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackBtn from './components/BackBtn';
import HomeScreen from './screens/HomeScreen';
import IconScreen from './screens/IconScreen';

const styles = StyleSheet.create({
  navBarStyle: {
    backgroundColor: '#616D7E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  titleStyle: {
    color: 'white',
    fontSize: 20,
  },
});

const SearchIcon = <Icon name="magnify" color="white" size={25} />;

const RouterComponent = (props) => {
  const { navBarStyle, titleStyle } = styles;
  const { color, headerTitle } = props;

  return (
    <Router navigationBarStyle={navBarStyle} titleStyle={titleStyle} navBarButtonColor="white">
      <Scene key="root" hideNavBar>
        <Scene key="all">
          <Scene
            initial
            key="home"
            component={HomeScreen}
            rightTitle={SearchIcon}
            onRight={() => Actions.icon()}
            title="Visit TC"
          />

          <Scene
            key="icon"
            component={IconScreen}
            title={headerTitle}
            navigationBarStyle={{ backgroundColor: color }}
            renderBackButton={() => <BackBtn color="white" size={25} bgColor={color} />}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

const mapStateToProps = ({ home }) => {
  const { color, headerTitle } = home;

  return {
    color,
    headerTitle,
  };
};

RouterComponent.propTypes = {
  color: PropTypes.string.isRequired,
  headerTitle: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  {},
)(RouterComponent);
