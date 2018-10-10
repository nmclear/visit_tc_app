import { Actions } from 'react-native-router-flux';

import {
  EXPLORE_SELECTED, HOTEL_SELECTED, RESTAURANT_SELECTED, MORE_SELECTED,
} from './types';

import {
  exploreIcons, hotelIcons, moreIcons, restaurantIcons,
} from '../iconData';

export const exploreSelected = (selected) => {
  Actions.explore();
  return {
    type: EXPLORE_SELECTED,
    payload: exploreIcons,
  };
};

export const hotelSelected = (selected) => {
  Actions.hotel();
  return {
    type: HOTEL_SELECTED,
    payload: hotelIcons,
  };
};

export const restaurantSelected = (selected) => {
  Actions.restaurant();
  return {
    type: RESTAURANT_SELECTED,
    payload: restaurantIcons,
  };
};

export const moreSelected = (selected) => {
  Actions.more();
  return {
    type: MORE_SELECTED,
    payload: moreIcons,
  };
};
