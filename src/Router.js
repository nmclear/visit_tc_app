import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';

const styles = StyleSheet.create({
  navBarStyle: {
    backgroundColor: '#82CAFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  titleStyle: {
    color: 'white',
  },
});

const SearchIcon = <Icon name="search" color="white" size={25} />;

const RouterComponent = () => {
  const { navBarStyle, titleStyle } = styles;

  return (
    <Router navigationBarStyle={navBarStyle} titleStyle={titleStyle}>
      <Scene key="root" hideNavBar>
        <Scene key="all">
          <Scene
            initial
            key="home"
            component={HomeScreen}
            rightTitle={SearchIcon}
            onRight={() => Actions.explore()}
            title="Visit TC"
          />
          <Scene key="explore" component={ExploreScreen} title="Explore" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
