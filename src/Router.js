import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackBtn from './components/BackBtn';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import HotelScreen from './screens/HotelScreen';
import MoreScreen from './screens/MoreScreen';

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

const RouterComponent = () => {
  const { navBarStyle, titleStyle } = styles;
  return (
    <Router navigationBarStyle={navBarStyle} titleStyle={titleStyle} navBarButtonColor="white">
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
          <Scene
            key="explore"
            component={ExploreScreen}
            title="Things To Do"
            navigationBarStyle={{ backgroundColor: '#82CAFF' }}
            renderBackButton={() => <BackBtn color="white" size={25} bgColor="#82CAFF" />}
          />
          <Scene
            key="restaurant"
            component={RestaurantScreen}
            title="Restaurants"
            navigationBarStyle={{ backgroundColor: '#5E7D7E' }}
            renderBackButton={() => <BackBtn color="white" size={25} bgColor="#5E7D7E" />}
          />
          <Scene
            key="hotel"
            component={HotelScreen}
            title="Hotels"
            navigationBarStyle={{ backgroundColor: '#FF8040' }}
            renderBackButton={() => <BackBtn color="white" size={25} bgColor="#FF8040" />}
          />
          <Scene
            key="more"
            component={MoreScreen}
            title="More"
            navigationBarStyle={{ backgroundColor: '#FDD017' }}
            renderBackButton={() => <BackBtn color="white" size={25} bgColor="#FDD017" />}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
