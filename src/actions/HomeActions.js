import { Actions } from 'react-native-router-flux';

import {
  EXPLORE_SELECTED, HOTEL_SELECTED, RESTAURANT_SELECTED, MORE_SELECTED,
} from './types';

import {
  exploreIcons, hotelIcons, moreIcons, restaurantIcons,
} from '../iconData';

const renderNavScene = (type, payload) => ({
  type,
  payload,
});

const callIconScene = () => setTimeout(() => {
  Actions.icon();
}, 100);

export const exploreSelected = () => {
  const payload = {
    icons: exploreIcons,
    color: '#82CAFF',
    headerTitle: 'Things To Do',
  };
  callIconScene();
  return renderNavScene(EXPLORE_SELECTED, payload);
};

export const hotelSelected = () => {
  const payload = {
    icons: hotelIcons,
    color: '#FF8040',
    headerTitle: 'Hotels',
  };
  callIconScene();
  return renderNavScene(HOTEL_SELECTED, payload);
};

export const restaurantSelected = () => {
  const payload = {
    icons: restaurantIcons,
    color: '#5E7D7E',
    headerTitle: 'Restaurant',
  };
  callIconScene();
  return renderNavScene(RESTAURANT_SELECTED, payload);
};

export const moreSelected = () => {
  const payload = {
    icons: moreIcons,
    color: '#FDD017',
    headerTitle: 'More',
  };
  callIconScene();
  return renderNavScene(MORE_SELECTED, payload);
};
