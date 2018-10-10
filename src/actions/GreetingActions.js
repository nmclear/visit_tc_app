import { TIME_OF_DAY } from './types';

import {
  morningIcons, noonIcons, afternoonIcons, nightIcons, lateNightIcons,
} from '../iconData';

export const timeOfDaySetUp = () => {
  const time = new Date().getHours();
  let payload = {};
  if (time >= 4 && time < 11) {
    payload = {
      icons: morningIcons,
      text: 'Good Morning!',
    };
  }
  if (time >= 11 && time < 15) {
    payload = {
      icons: noonIcons,
      text: 'Happy Day!',
    };
  }
  if (time >= 15 && time < 18) {
    payload = {
      icons: afternoonIcons,
      text: 'Good Afternoon!',
    };
  }
  if (time >= 18 && time < 22) {
    payload = {
      icons: nightIcons,
      text: 'Good Evening!',
    };
  }
  if (time >= 22 && time < 4) {
    payload = {
      icons: lateNightIcons,
      text: 'Happy Late Night!',
    };
  }

  return {
    type: TIME_OF_DAY,
    payload,
  };
};
